import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Product from './pages/Product.js'
import Checkout from './pages/Checkout.js'
import Header from './components/Header.js'
import Sidebar from './components/Sidebar.js'
import Footer from './components/Footer.js'
import ProductDetails from './pages/ProductDetails.js'
import SearchResults from './pages/SearchResults.js';
import Home from './pages/Home.js';
const App = () => {
  return (
    <div className='overflow-hidden flex flex-col justify-between min-h-[100vh]'>
      <BrowserRouter>
        <div>
        <Header />
        </div>
        <div className='min-h-full overflow-hidden '>
        <Routes>
          <Route path='/products' element={<Product />} />
          <Route path='/' element={<Home />} />
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
