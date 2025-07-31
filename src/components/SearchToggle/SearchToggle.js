'use client'
import data from "../../data/data.json"
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ClipboardIcon, XMarkIcon } from '@heroicons/react/24/solid'

const dropdownVariants = {
    hidden: { opacity: 0, y: -10, scaleY: 0.95 },
    visible: { opacity: 1, y: 0, scaleY: 1, transition: { duration: 0.2 } },
    exit: { opacity: 0, y: -10, scaleY: 0.95, transition: { duration: 0.15 } },
};

export default function SearchToggle() {
    const [query, setQuery] = useState('');
    const [result, setResult] = useState([]);
    const [notFound, setNotFound] = useState(false);
    const inputRef = useRef(null);

    useEffect(() => {
        const trimQuery = query.trim();
        const count = trimQuery.split(/\s+/).length;

        if (trimQuery.length === '' || count < 3) {
            setResult([]);
            setNotFound(false);
            return;
        }

        const normarly = removeVietnameseTones(trimQuery.toLowerCase());

        const matches = data.filter(item =>
            removeVietnameseTones(item.A.toLowerCase()).includes(normarly)
        ).slice(0, 5);

        setResult(matches);
        setNotFound(matches.length === 0);
    }, [query]);

    const handlePasteClick = async () => {
        const text = await navigator.clipboard.readText();
        setQuery(text);
        if (inputRef.current) {
            inputRef.current.value = text;
        }
    };

    const handleClearClick = () => {
        setQuery('');
        if (inputRef.current) {
            inputRef.current.value = '';
            inputRef.current.focus();
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative mx-auto flex justify-center w-90 sm:w-140 md:w-170 lg:w-210 xl:w-240 text-base">
            <input
                type="text" placeholder="Đạo hữu dán từ khóa vào đây nhé 👉"
                className="w-full px-4 py-2 pt-3 rounded-full border border-gray-400 bg-white pr-12 size-10 text-[16px]
                        text-gray-800 focus:outline-none focus:ring-1 focus:border-pink-600 transition"
                onChange={(e) => setQuery(e.target.value)}
                ref={inputRef}
                autoFocus
            />

            {query ? (
                <button
                    onClick={handleClearClick}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-red-500"
                    title="Xoá nội dung"
                >
                    <XMarkIcon className="size-6 mr-2" />
                </button>
            ) : (
                <button
                    onClick={handlePasteClick}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-amber-300"
                    title="Dán từ clipboard"
                >
                    <ClipboardIcon className="size-5 mr-2" />
                </button>
            )}

            <AnimatePresence>
                {result.length > 0 && (
                    <motion.div
                        className="absolute z-50 w-full top-full bg-white shadow-md rounded-2xl overflow-hidden outline-none"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={dropdownVariants}
                    >
                        {result.map((item, index) => (
                            <div
                                key={index}
                                className="px-2 py-1.5 pl-4 border-gray-500 border-b-1 hover:bg-gray-100 text-[17px] transition">
                                {item.B}
                            </div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
            <div className="-z-0 absolute mt-18 text-white text-center font-semibold px-3 md:px-0">Lưu ý: Ưu tiên tìm kiếm bằng TỪ KHÓA hơn là COPY nguyên câu hỏi nha😋</div>
        </motion.div>
    );
}

function removeVietnameseTones(str) {
    return str.normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/đ/g, 'd')
        .replace(/Đ/g, 'D');
}