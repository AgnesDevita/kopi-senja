import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 text-white shadow-lg">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold text-yellow-500 hover:text-yellow-400">
                    ☕ Kopi Senja
                </Link>
                <div className="hidden md:flex space-x-6">
                    <Link to="/" className="py-2 px-3 hover:bg-gray-700 rounded-md">Home</Link>
                    <Link to="/products" className="py-2 px-3 hover:bg-gray-700 rounded-md">Produk</Link>
                    <Link to="/about" className="py-2 px-3 hover:bg-gray-700 rounded-md">Tentang Kami</Link>
                    <Link to="/blog" className="py-2 px-3 hover:bg-gray-700 rounded-md">Blog</Link>
                    <Link to="/contact" className="py-2 px-3 hover:bg-gray-700 rounded-md">Kontak</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;