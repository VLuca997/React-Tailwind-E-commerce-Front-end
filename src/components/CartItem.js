// CartItem.js
import React, { useContext } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';

const CartItem = ({ item }) => {
    const { id, amount, title, price, image } = item;
    const { incrementAmount, decrementAmount, removeItem } = useContext(CartContext);

    const handleRemove = () => {
        removeItem(id); 
    };

    return (
        <div className="mt-4 flex items-center justify-between  shadow-md p-4 rounded-lg mb-4 border-2 border-gray-400/40 bg-slate-200/40">
            <Link to={`/product/${id}`}>
                <img src={image} alt={title} className="w-16 h-16 rounded-md" />
            </Link>
            <div className="flex-1 ml-4">
                <div className="flex justify-between items-start">
                    <Link to={`/product/${id}`}>
                        <h2 className="font-semibold text-lg hover:underline hover:text-red-500">{title}</h2>
                    </Link>
                    <div>
                        <IoMdClose onClick={handleRemove} className="h-6 w-6 text-gray-500 hover:text-red-500 cursor-pointer" />
                    </div>
                </div>
                <div className="flex justify-between mt-2">
                    <div className="flex items-center">
                        <p className="text-gray-500">${price.toFixed(2)}</p>
                        <div className="mx-4 flex items-center">
                            <button
                                onClick={() => decrementAmount(id)}
                                className="text-gray-600 hover:text-gray-900"
                            >
                                <FaMinus />
                            </button>
                            <span className="mx-2 text-lg font-medium">{amount}</span>
                            <button
                                onClick={() => incrementAmount(id)}
                                className="text-gray-600 hover:text-gray-900"
                            >
                                <FaPlus />
                            </button>
                        </div>
                    </div>
                    <p className="text-gray-500 font-bold text-xl">${(price * amount).toFixed(2)}</p>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
