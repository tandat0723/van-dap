'use client'
import "./SearchToggle.css";
import data from "../../data/data.json"
import React, { useState, useEffect, useRef } from "react";

export default function SearchToggle() {
    const [query, setQuery] = useState('');
    const [result, setResult] = useState([]);

    useEffect(() => {
        const trimQuery = query.trim();
        const count = trimQuery.split(/\s+/).length;
        if (trimQuery.length ==='' || count < 3) {
            setResult([]); //hiden result
            return;
        }

        const matches = data.filter(item =>
            item.A.toLowerCase().includes(trimQuery.toLowerCase())
        ).slice(0, 5); //keep 5 result
        setResult(matches);
    }, [query]);



    return (
        <div>
            <div className="relative max-w-md mx-auto mt-10">
                <input
                    type="text"
                    placeholder="Đạo hữu dán câu hỏi vào đây"
                    className="w-full pl-10 pr-10 py-2 rounded-full border border-gray-400  bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-300 transition"
                    onChange={(e) => setQuery(e.target.value)}
                    autoFocus
                />

                {result.length > 0 && (
                    <div className="absolute top-full left-0 w-full text-gray-600 bg-white border border-gray-300 shadow-lg z-[1000] p-2.5 mt-1 rounded-md">
                        {result.map((item, index) => (
                            <div key={index} className="px-2 py-1.5 border-b border-gray-300 last:border-b-0">
                                {item.B}
                            </div>
                        ))}
                    </div>
                )}
            </div>

        </div>
    );
}