import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SidebarContext } from '../contexts/Product/SidebarContext';
import { CartContext } from '../contexts/Product/CartContext';
import { BsBag } from 'react-icons/bs';
import SearchBar from './Product/SearchBar';

const Header = () => {
    const { isOpen, setIsOpen } = useContext(SidebarContext);
    const { cart } = useContext(CartContext);

    return (
        <div className='bg-slate-400 flex justify-between items-center px-4 py-3 md:px-8 lg:px-16'>
            <div className='flex items-center space-x-4'>
                <a href='/' className='block'>
                    <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw9oD8Zih6GWb-pFHWny-i8Yu8kwheW833ag&s'} alt="Logo" className='h-10 w-10 object-contain' />
                </a>
                <SearchBar />
            </div>
            <div className='flex space-x-4'>
                <Link to='/' className='text-white hover:text-gray-300 font-semibold'>
                    Home
                </Link>
                <Link to='/products' className='text-white hover:text-gray-300 font-semibold'>
                    Product
                </Link>
                <Link to='/palestra' className='text-white hover:text-gray-300 font-semibold'>
                    Palestra
                </Link>
            </div>
            <div className="relative flex items-center">
                <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-2 py-1 text-xs">{cart.length}</span>
                <BsBag
                    onClick={() => setIsOpen(!isOpen)}
                    className='text-white text-3xl cursor-pointer'
                />
            </div>
        </div>
    );
};

export default Header;
