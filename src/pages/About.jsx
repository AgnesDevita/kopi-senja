import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
        >
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Tentang Kami</h1>
            <p className="text-gray-700 leading-relaxed">
                Kopi Senja lahir dari kecintaan kami terhadap kopi berkualitas dan suasana yang menenangkan.
                Didirikan pada tahun 2025, kami berkomitmen untuk menyajikan biji kopi terbaik dari seluruh
                penjuru Nusantara, yang diproses dengan penuh cinta oleh para barista kami yang berpengalaman.
                Bagi kami, secangkir kopi bukan hanya minuman, tapi sebuah pengalaman.
            </p>
        </motion.div>
    );
};

export default About;