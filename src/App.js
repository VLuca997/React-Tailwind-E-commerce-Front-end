import React from 'react';
import {Route,Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home.js'
import Header from './components/Header.js'
import Sidebar from './components/Sidebar.js'
import Footer from './components/Footer.js'
import ProductDetails from './pages/ProductDetails.js'
const App = () => {
  return ( 
  <div className='overflow-hidden'>
<BrowserRouter>
<Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/product/:id' element={<ProductDetails/>}>

      </Route>
    </Routes>
    <Sidebar/>
     <Footer/> 
</BrowserRouter>

  </div>
  )
};

export default App;
