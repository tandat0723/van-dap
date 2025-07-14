import Link from 'next/link';
import React from 'react';

function Navbar() {
    return (
        <div>
            <nav className="flex flex-wrap justify-center gap-2 sm:gap-4 bg-white p-4 rounded shadow">
                <Link href="/"
                    className="px-4 py-2 rounded-md text-gray-800 hover:text-amber-300  transition font-medium border-b-2 border-transparent hover:border-amber-300">
                    Vấn đáp
                </Link>
                <Link href="/tip"
                    className="px-4 py-2 rounded-md text-gray-800 hover:text-amber-300  transition font-medium border-b-2 border-transparent hover:border-amber-300">
                    Tip
                </Link>
                <Link href="/profile"
                    className="px-4 py-2 rounded-md text-gray-800 hover:text-amber-300  transition font-medium border-b-2 border-transparent hover:border-amber-300">
                    Về chúng tôi
                </Link>
            </nav>
        </div>
    );
}

export default Navbar;