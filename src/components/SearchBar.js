import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductContext } from '../contexts/ProductContext';
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const { products } = useContext(ProductContext);
    const navigate = useNavigate();

    const handleSearch = (event) => {
        const value = event.target.value;
        setSearchTerm(value);

        if (value.trim() === '') {
            setSuggestions([]);
            return;
        }

        const filteredSuggestions = products.filter(product =>
            product.title.toLowerCase().includes(value.toLowerCase())
        ).slice(0, 10); // Limitiamo a 10 suggerimenti per esempio

        setSuggestions(filteredSuggestions);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            executeSearch();
        }
    };

    const executeSearch = () => {
        if (searchTerm.trim() === '') {
            return;
        }

        navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
        setSearchTerm('');
        setSuggestions([]);
    };

    const handleButtonClick = () => {
        executeSearch();
    };

    const handleSuggestionClick = (suggestion) => {
        setSearchTerm(suggestion.title);
        navigate(`/search?query=${encodeURIComponent(suggestion.title)}`);
        setSuggestions([]);
    };

    return (
        <div className="relative">
            <input 
                type="text" 
                placeholder="Search..." 
                value={searchTerm}
                onChange={handleSearch}
                onKeyUp={handleKeyPress}
                className="py-2 px-3 rounded-2xl"
            />
            <button onClick={handleButtonClick} className="p-2 bg-blue-500 text-white rounded-full ml-2">
                <FaSearch />
            </button>
            {suggestions.length > 0 && (
                <ul className="absolute bg-white text-black w-full border mt-2 rounded max-h-60 overflow-y-auto z-10">
                    {suggestions.map((suggestion, index,price) => (
                        <li 
                            key={index} 
                            onClick={() => handleSuggestionClick(suggestion)} 
                            className="pr-3 pl-1 pb-2 hover:bg-gray-200 cursor-pointer hover:border-b-gray-300 border-b-gray-200 border-2"
                        >
                            <div className='flex justify-between items-center'> 
                            <span>{suggestion.title}</span> <span className='text-end'>{suggestion.price}€</span>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchBar;