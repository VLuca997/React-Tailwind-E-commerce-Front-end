import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

// Icons
import { IoMdArrowForward } from 'react-icons/io';
import { FiTrash2 } from 'react-icons/fi';

// Components
import CartItem from '../components/CartItem';

// Import SidebarContext 
import { SidebarContext } from '../contexts/SidebarContext';

// Import CartContext
import { CartContext } from '../contexts/CartContext';

const Sidebar = () => {
  // Open/close sidebar
  const { isOpen, handleClose } = useContext(SidebarContext);

  // Cart context
  const { cart } = useContext(CartContext);

  // Calcola il numero totale di pezzi nel carrello
  const totalItems = cart.reduce((total, item) => total + item.amount, 0);

  
  return (
    <div className={`${isOpen ? "right-0" : '-right-full'} w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px] overflow-y-auto`}>
      <div className='flex items-center justify-between py-6 border-b'>
        <div className='uppercase text-sm font-semibold'>
          Prodotti nel Carrello: ({cart.length})
          <div className='uppercase text-sm font-semibold'>
            Pezzi Totali: {totalItems}
          </div>
        </div>
        <div className='flex flex-col items-center'>
          
          <div onClick={handleClose} className='cursor-pointer w-8 h-8 flex justify-center items-center'>
            <IoMdArrowForward className='text-3xl' />
          </div>
        </div>
      </div>
      <div className='h-full'>
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Sidebar;
