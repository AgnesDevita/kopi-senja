import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h1 className="text-4xl font-bold text-gray-800 mb-6">Hubungi Kami</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-4">Alamat Kami</h2>
                    <p className="text-gray-700">Jl. Scientia Boulevard, Gading Serpong</p>
                    <p className="text-gray-700">Tangerang, Banten 15811</p>
                    <p className="mt-4 text-gray-700"><strong>Email:</strong> info@kopisenja.com</p>
                    <p className="text-gray-700"><strong>Telepon:</strong> (021) 123-4567</p>
                </div>
                <div className="rounded-lg shadow-md overflow-hidden">
                    {/* PASTE KODE IFRAME DARI GOOGLE MAPS DI SINI */}
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.052631317076!2d106.61623567500001!3d-6.256879893731174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fb56b25975f3%3A0x148f53325608a2f4!2sUniversitas%20Multimedia%20Nusantara!5e0!3m2!1sen!2sid!4v1693826888463!5m2!1sen!2sid"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
        </motion.div>
    );
};

export default Contact;