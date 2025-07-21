'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

function Navbar() {
    const pathname = usePathname();
    return (
        <div>
            <nav className="flex flex-wrap justify-center gap-2 sm:gap-4 bg-white p-4 rounded shadow">
                <NavItem href="/" label="Vấn đáp" currentPath={pathname} />
                <NavItem href="/tip" label="Tip" currentPath={pathname} />
            </nav>
        </div>
    );
}

function NavItem({ href, label, currentPath }) {
    const isActive = currentPath === href;

    return (
        <Link
            href={href}
            className={`px-4 py-2 rounded-md font-medium transition border-b-2 min-w-[80px] text-center
            ${isActive
                    ? 'text-amber-500 border-amber-500'
                    : 'text-gray-700 dark:text-gray-300 hover:text-amber-400 hover:border-amber-300 border-transparent'}`}>
            {label}
        </Link>
    )
}

export default Navbar;