import React, { useContext } from 'react';
import { Link } from 'react-router-dom';


//icons
import {IoMdArrowForward} from 'react-icons/io'
import {FiTrash2} from 'react-icons/fi'


//Components
import CartItem from '../components/CartItem.js'


//import SidebarContext 
import { SidebarContext } from '../contexts/SidebarContext';

// import CartContext
import { CartContext } from '../contexts/CartContext';

const Sidebar = () => {
  const {isOpen,handleClose} = useContext(SidebarContext)
  // console.log(useContext(CartContext))
  return (
  
  <div className={`${isOpen ? "right-0" : '-right-full'} w-full bg-white fixed top-0 h-full shdow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}>
    <div className='flex items-center justify-between py-6 border-b '>
      <div className='uppercase text-sm font-semibold'>
          Prodotti nel Carrello:(0)
      </div>
      <div onClick={handleClose} className='cursor-pointer w-8 h-8 flex justify-center items-center'>
        <IoMdArrowForward className='text-3xl'/>
      </div>
    </div>
  </div>

  )
};

export default Sidebar;
