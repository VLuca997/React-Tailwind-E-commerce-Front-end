import React, { useContext } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';


//icons
import { BsBag } from 'react-icons/bs'
const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext)

  return (

    <div className='flex max-h-[100px] justify-between items-center px-[20px]'>
      <div  className='w-[150px] h-[150px]'>
       <a href='/'> <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw9oD8Zih6GWb-pFHWny-i8Yu8kwheW833ag&s'}/></a>
      </div>
      <div>
        SEARCH
      </div>
      <div>
        <div className='cursor-pointer flex relative' >
          <BsBag
            onClick={() => setIsOpen(!isOpen)}
            className='text-3xl m-2'
          /></div>
      </div>
    </div>


  );
};

export default Header;
