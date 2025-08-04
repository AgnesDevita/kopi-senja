import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-center"
        >
            <h1 className="text-5xl font-bold text-gray-800 mb-4">Selamat Datang di Kopi Senja</h1>
            <p className="text-xl text-gray-600 mb-8">Menemukan Ketenangan dalam Setiap Cangkir.</p>
            <img
                src="https://source.unsplash.com/1600x900/?coffee-shop"
                alt="Coffee Shop"
                className="w-full max-w-4xl mx-auto rounded-lg shadow-xl"
            />
        </motion.div>
    );
};

export default Home;