import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Product from '../components/Product';
import { BsArrowLeftCircle,BsArrowRightCircle } from 'react-icons/bs';

const SearchResults = () => {
    const [products, setProducts] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();

    const query = new URLSearchParams(location.search).get('query');

    useEffect(() => {
        if (query) {
            fetch(`https://fakestoreapi.com/products`)
                .then(response => response.json())
                .then(data => {
                    const filteredProducts = data.filter(product => 
                        product.title.toLowerCase().includes(query.toLowerCase())
                    );
                    setProducts(filteredProducts);
                });
        }
    }, [query]);

    const handlePrevClick = () => {
        navigate(-1); // Torna alla pagina precedente
    };
    const handleNextClick = () => {
        navigate(+1); // Torna alla pagina precedente
    };

    return (
        <div className="container mx-auto p-4">
            <div className="flex items-center mb-4">
                <button onClick={handlePrevClick} className="p-2 mr-3 hover:text-red-500 text-2xl rounded-full">
                    <BsArrowLeftCircle/>
                </button>
                <button onClick={handleNextClick} className="p-2 mr-3 hover:text-red-500 text-2xl rounded-full">
                    <BsArrowRightCircle/>
                </button>
                <h1 className="text-2xl font-bold">
                    Trovati <span className='text-red-500'>{products.length}</span> elementi per i Prodotti con "<span className='text-blue-500'>{query}</span>" nel nome.
                </h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {products.map(product => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default SearchResults;
