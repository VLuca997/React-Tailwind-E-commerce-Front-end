import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SidebarContext } from '../contexts/Product/SidebarContext';
import { CartContext } from '../contexts/Product/CartContext';
import { BsBag } from 'react-icons/bs';
import SearchBar from './Product/SearchBar';

const Header = () => {
    const { isOpen, setIsOpen } = useContext(SidebarContext);
    const { cart } = useContext(CartContext);

    return <>
        <header className="bg-gray-800 text-white shadow-lg">
            <div className=" mx-auto px-4 py-3 md:px-8 lg:px-16 flex justify-between items-center">
                {/* Logo and SearchBar */}
                <div className="flex items-center space-x-4">
                    <Link to="/" className="flex items-center space-x-2">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw9oD8Zih6GWb-pFHWny-i8Yu8kwheW833ag&s"
                            alt="Logo"
                            className="h-10 w-10 object-contain"
                        />
                        <span className="text-xl font-semibold">Api E-Commerce</span>
                    </Link>
                </div>


              <div className='flex '>
                  {/* Navigation Links */}
                  <nav className="hidden md:flex space-x-4 pr-6">
                        <Link to="/" className="text-white hover:text-gray-300 font-semibold">
                            Home
                        </Link>
                        <Link to="/products" className="text-white hover:text-gray-300 font-semibold">
                            Prodotti
                        </Link>
                        {/* <Link to="/palestra" className="text-white hover:text-gray-300 font-semibold">
                            Palestra
                        </Link> */}
                    </nav>
                {/* Cart Icon */}
                <div className="relative flex items-center">
                    <span className="absolute -top-3 -right-4 bg-yellow-300 text-black rounded-full px-2 py-1 text-xs">
                        {cart.length}
                    </span>
                    <BsBag
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white text-3xl cursor-pointer"
                    />
                </div>
              </div>
            </div>
        </header>
      
   </>;
};

export default Header;
