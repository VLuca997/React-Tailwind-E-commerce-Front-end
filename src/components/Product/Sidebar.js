import React, { useContext } from 'react';
import { IoMdArrowForward } from 'react-icons/io';
import { SidebarContext } from '../../contexts/Product/SidebarContext';
import { CartContext } from '../../contexts/Product/CartContext';
import { Link } from 'react-router-dom';
import CartItem from './CartItem'; // Assuming CartItem is in the same directory

const Sidebar = () => {
    const { isOpen, handleClose } = useContext(SidebarContext);
    const { cart, removeAllItem } = useContext(CartContext);

    const totalItems = cart.reduce((total, item) => total + item.amount, 0);
    const totalCost = cart.reduce((total, item) => total + (item.amount * item.price), 0).toFixed(2);

    return (
        <div className={`${isOpen ? "right-0" : 'hidden -right-full'} fixed border-b-gray-600/50 border-l-gray-600/50 border-2 rounded-bl-xl w-full bg-white top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px] flex flex-col`}>
            <div className='flex items-center justify-between py-6 border-b-2 border-gray-400'>
                <div className='uppercase text-sm font-semibold'>
                    <div className='flex flex-col space-y-2'>
                        <div className='uppercase text-sm font-semibold'>
                            Prodotti nel Carrello: (<span className='text-blue-500'> {cart.length} </span>)
                        </div>
                        <div className='uppercase text-sm font-semibold'>
                            Pezzi Totali: (<span className='text-blue-500'> {totalItems}</span> )
                        </div>
                    </div>
                </div>
                <div onClick={handleClose} className='cursor-pointer w-8 h-8 flex justify-center items-center'>
                    <IoMdArrowForward className='text-3xl' />
                </div>
            </div>
            <div className='flex-1 overflow-y-auto'>
                {cart.map((item) => (
                    <CartItem key={item.id} item={item} />
                ))}
            </div>
            <div className='mt-4 p-4 border-t flex flex-col sm:flex-row justify-between items-center border-gray-400'>
                <div className='flex flex-col space-y-2 text-center sm:text-left'>
                    <div className='uppercase text-sm font-semibold'>
                        Pezzi Totali: <span className='text-blue-500'>{totalItems}</span>
                    </div>
                    <div className='uppercase text-sm font-semibold'>
                        Totale: <span className='text-xl text-red-500 px-2'> {totalCost} €</span>
                    </div>
                </div>
                <div className='flex flex-col sm:flex-row items-center mt-4 sm:mt-0'>
                    <button onClick={removeAllItem} className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md focus:outline-none mt-4 sm:mt-0">
                        Svuota Carrello
                    </button>
                </div>
            </div>
            <div className='mb-2 text-center py-2 bg-yellow-300 hover:bg-yellow-300 rounded-full transition-all duration-300 ease-in-out'>
                <Link
                    to='/cart-report'
                    className='text-white font-bold'
                >
                    Visualizza Report
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;
