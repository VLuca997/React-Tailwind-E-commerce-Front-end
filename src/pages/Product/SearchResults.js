import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Product from '../../components/Product/Product';
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';
import SearchBar from '../../components/Product/SearchBar';

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
        navigate(-1);
    };

    const handleNextClick = () => {
        navigate(+1);
    };

    return (
        <div className="flex flex-col mx-auto pt-4 p-2 bg-yellow-300 min-h-[100vh]">
           <div className='bg-zinc-500 rounded-2xl py-5'>
            
                <div className="px-3 flex items-center mb-4 ">
                   <div className='bg-yellow-300 rounded-full px-3 mx-2'>
                   <button onClick={handlePrevClick} className="p-2 mr-3  hover:text-red-500 text-2xl rounded-full">
                        <BsArrowLeftCircle fontSize={'30px'} />
                    </button>
                    <button onClick={handleNextClick} className="p-2  hover:text-red-500 text-2xl rounded-full">
                        <BsArrowRightCircle fontSize={'30px'}  />
                    </button>
                    </div> 
                    <h1 className="text-2xl font-bold">
                        Trovati <span className='text-yellow-400'>{products.length}</span> elementi per i Prodotti con " <span className='text-yellow-400'>{query}</span> " nel nome.
                    </h1>
                </div>
                <div className='flex justify-center '>
                    <SearchBar />
                </div> 
           </div>

            <div className="px-3 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map(product => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default SearchResults;
