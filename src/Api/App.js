import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Product from '../pages/Product/Product.js'
import Checkout from '../pages/Product/Checkout.js'
import Header from '../components/Header.js'
import Sidebar from '../components/Product/Sidebar.js'
import Footer from '../components/Footer.js'
import ProductDetails from '../pages/Product/ProductDetails.js'
import SearchResults from '../pages/Product/SearchResults.js';
import Home from '../pages/Home.js';
import IkeaCategories from '../pages/Ikea/IkeaCategories.js';

const App = () => {
  return (
    <div className='overflow-hidden flex flex-col justify-between min-h-[100vh]'>
      <BrowserRouter>
        <div>
        <Header />
        </div>
        <div className='min-h-full overflow-hidden '>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/ikea' element={<IkeaCategories />} />
          <Route path='/products' element={<Product />} />
          <Route path='/search' element={<SearchResults />} />
          <Route path="/cart-report" element={<Checkout />} />
          <Route path='/product/:id' element={<ProductDetails />}>
          </Route>
        </Routes>
        <Sidebar />
        </div>
       <div className=''>
       <Footer /></div> 
      </BrowserRouter>

    </div>
  )
};

export default App;
