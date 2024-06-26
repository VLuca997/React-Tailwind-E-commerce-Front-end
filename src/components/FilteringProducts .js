import React, { useState, useEffect } from 'react';
import { FaFilter } from 'react-icons/fa';

const FilteringProducts = ({ products, setFilteredProducts }) => {
    const [category, setCategory] = useState('');
    const [rating, setRating] = useState(0);
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    useEffect(() => {
        filterProducts();
    }, [category, rating, minPrice, maxPrice, products]);

    const filterProducts = () => {
        let tempProducts = [...products];

        if (category) {
            tempProducts = tempProducts.filter(product => product.category === category);
        }

        if (rating) {
            tempProducts = tempProducts.filter(product => product.rating.rate >= rating);
        }

        if (minPrice !== '') {
            tempProducts = tempProducts.filter(product => product.price >= parseFloat(minPrice));
        }

        if (maxPrice !== '') {
            tempProducts = tempProducts.filter(product => product.price <= parseFloat(maxPrice));
        }

        setFilteredProducts(tempProducts);
    };

    const resetFilters = () => {
        setCategory('');
        setRating(0);
        setMinPrice('');
        setMaxPrice('');
    };

    return (
        <div className="space-y-4">
            <div className="flex items-center space-x-2 text-xl text-gray-700">
                <FaFilter />
                <h2>Filtra Prodotti</h2>
            </div>
            <div className="filter-controls space-y-4">
                <div>
                    <label className="block text-gray-700">Categoria</label>
                    <select 
                        value={category} 
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full p-2 border rounded-md"
                    >
                        <option value="">Tutte le Categorie</option>
                        {Array.from(new Set(products.map(product => product.category))).map((category, index) => (
                            <option key={index} value={category}>{category}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className="block text-gray-700">Valutazione</label>
                    <select 
                        value={rating} 
                        onChange={(e) => setRating(e.target.value)}
                        className="w-full p-2 border rounded-md"
                    >
                        <option value={0}>Tutte le Valutazioni</option>
                        <option value={1}>1 Stella & Up</option>
                        <option value={2}>2 Stelle & Up</option>
                        <option value={3}>3 Stelle & Up</option>
                        <option value={4}>4 Stelle & Up</option>
                    </select>
                </div>
                <div>
                    <label className="block text-gray-700">Prezzo Minimo</label>
                    <input
                        type="number"
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value)}
                        className="w-full p-2 border rounded-md"
                        placeholder="Inserisci il prezzo minimo"
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Prezzo Massimo</label>
                    <input
                        type="number"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                        className="w-full p-2 border rounded-md"
                        placeholder="Inserisci il prezzo massimo"
                    />
                </div>
                <div>
                    <button
                        onClick={resetFilters}
                        className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 transition duration-300"
                    >
                        Reset
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FilteringProducts;
