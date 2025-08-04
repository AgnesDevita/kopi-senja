import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Products = () => {
    const [coffees, setCoffees] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCoffees = async () => {
            try {
                const response = await fetch('https://api.sampleapis.com/coffee/hot');
                const data = await response.json();
                // Filter untuk menghilangkan duplikat dan item tanpa deskripsi
                const uniqueData = Array.from(new Set(data.map(a => a.id)))
                    .map(id => data.find(a => a.id === id));
                setCoffees(uniqueData.filter(coffee => coffee.description));
            } catch (error) {
                console.error("Gagal mengambil data kopi:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchCoffees();
    }, []); // Array dependensi kosong agar useEffect hanya berjalan sekali

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h1 className="text-4xl font-bold text-gray-800 mb-6">Menu Kopi Kami</h1>
            {loading ? (
                <p>Memuat menu...</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {coffees.map(coffee => (
                        <motion.div
                            key={coffee.id}
                            className="bg-white rounded-lg shadow-lg overflow-hidden"
                            whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(0,0,0,0.1)" }}
                        >
                            <img src={coffee.image} alt={coffee.title} className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <h2 className="text-2xl font-bold text-gray-800">{coffee.title}</h2>
                                <p className="mt-2 text-gray-600">{coffee.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}
        </motion.div>
    );
};

export default Products;