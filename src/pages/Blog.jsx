import React from 'react';
import { motion } from 'framer-motion';

const Blog = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h1 className="text-4xl font-bold text-gray-800 mb-6">Cerita dari Kopi Senja</h1>
            <div className="space-y-8">
                <div className="p-6 bg-white rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-2">Seni di Balik Secangkir Latte</h2>
                    <p className="text-gray-600">Pelajari bagaimana barista kami menciptakan latte art yang indah dan apa makna di balik setiap goresannya.</p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-2">Perjalanan Biji Kopi Gayo</h2>
                    <p className="text-gray-600">Ikuti perjalanan biji kopi Gayo dari dataran tinggi Aceh hingga menjadi minuman nikmat di hadapan Anda.</p>
                </div>
            </div>
        </motion.div>
    );
};

export default Blog;