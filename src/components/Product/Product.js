import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BsPlus, BsEyeFill } from 'react-icons/bs';
import { FaStar } from 'react-icons/fa';
import { CartContext } from '../../contexts/Product/CartContext';

const Product = ({ product }) => {
    const { addToCart } = useContext(CartContext);
    const { id, image, category, title, price, rating } = product;

    return (
        <div className="border bg-white border-slate-300 rounded-lg shadow-md overflow-hidden group transition transform hover:scale-105">
            <div className="w-full h-64 flex justify-center items-center bg-gray-100">
                <img className="w-full h-full object-contain" src={image} alt={title} />
            </div>
            <div className="p-4">
                <div className="text-sm capitalize text-gray-500 mb-1">{category}</div>
                <Link to={`/product/${id}`} className="block font-semibold mb-1 text-lg hover:text-red-500 transition">
                    {title}
                </Link>
                <div className="flex justify-between items-center">
                    <p className="font-semibold text-slate-600">{price} €</p>
                    <div className="flex items-center">
                        <FaStar className="text-yellow-500 mr-1" />
                        <span className="text-yellow-500">{rating.rate}</span>
                    </div>
                </div>
                <div className="absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <button onClick={() => addToCart(product, id)} className="flex justify-center items-center text-white w-12 h-12 bg-red-500 rounded-full shadow-lg hover:bg-red-600 transition">
                        <BsPlus className="text-3xl" />
                    </button>
                    <Link to={`/product/${id}`} className="w-12 h-12 bg-white flex justify-center items-center text-primary rounded-full shadow-lg hover:bg-gray-100 transition">
                        <BsEyeFill className="text-2xl" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Product;
