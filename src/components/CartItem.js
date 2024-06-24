import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import { Link } from 'react-router-dom';

const CartItem = ({ item }) => {
    const { id, amount, title, price, image } = item;
    const { incrementAmount, decrementAmount,removeItem  } = useContext(CartContext);
    const handleRemove = () => {
        removeItem(id); 
    };
    return (
        <div className="flex items-center justify-between bg-white shadow-md p-4 rounded-lg mb-4">
            <Link to={`/product/${id}`}>
                <img src={image} alt={title} className="w-16 h-16 rounded-md" />
            </Link>
            <div className="flex-1 ml-4">
                <div className='flex flex-row justify-between items-start'>
                    <Link to={`/product/${id}`}>
                        <h2 className="font-semibold text-lg hover:underline hover:text-red-500">{title}</h2>
                    </Link>
                    <div className='' >
                        <IoMdClose  onClick={handleRemove} className='h-6 w-6 text-gray-500 hover:rounded-3xl hover:border-2 border-red-500 hover:text-red-500 transition' />
                    </div>
                </div>
                <div className='flex flex-row justify-between'>
                    <p className="text-gray-500">${price.toFixed(2)}</p>
                    <p className="text-gray-500">${(price * amount).toFixed(2)}</p>

                    <div className="flex items-center">
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
            </div>
        </div>
    );
};

export default CartItem;
