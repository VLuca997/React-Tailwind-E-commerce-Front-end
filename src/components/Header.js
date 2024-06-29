import React, { useContext, useState } from 'react';
import { SidebarContext } from '../contexts/Product/SidebarContext';
import { CartContext } from '../contexts/Product/CartContext'; // Importa il contesto del carrello
import { Link } from 'react-router-dom';

//icons
import { BsBag } from 'react-icons/bs';
import SearchBar from './Product/SearchBar';

const Header = () => {
    const { isOpen, setIsOpen } = useContext(SidebarContext);
    const { cart } = useContext(CartContext); // Recupera il carrello dal contesto

    return (
        <div className='bg-slate-400 flex max-h-[70px] justify-between items-center px-[20px] py-5'>
            <div className='max-w-[50px] max-h-[50px]'>
                <a href='/'>
                    <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw9oD8Zih6GWb-pFHWny-i8Yu8kwheW833ag&s'} alt="Logo" />
                </a>
            </div>
            <div className='flex items-center'>
                <SearchBar />
                
            </div>
            <div className='flex flex-row '>
            <div className='hover:text-white font-bold '>
                    <div>
                        <Link to={'/'}>Home</Link>
                    </div>
                  
                </div>
                <div className='hover:text-white font-bold px-2'>
                    <div>
                        <Link to={'/products'}>Product</Link>
                    </div>
                  
                </div>
                <div className='hover:text-white font-bold px-2'>
                    <div>
                        <Link to={'/exercise'}>Exercise</Link>
                    </div>
                  
                </div>
            </div>
            <div className="relative flex items-center">
                <span className="absolute -m-1 top-1 right-0 bg-red-500 text-white rounded-full px-2 py-1 text-xs">{cart.length}</span>
                <BsBag
                    onClick={() => setIsOpen(!isOpen)}
                    className='text-3xl m-3  cursor-pointer'
                />
            </div>
        </div>
    );
};

export default Header;
