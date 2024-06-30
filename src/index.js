import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//importiamo il provider di Home
import ProductProvider from './contexts/Product/ProductContext';
//importiamo il provider di Sidebar
import SidebarProvider from './contexts/Product/SidebarContext';
//importiamo il provider di Cart
import CartProvider from './contexts/Product/CartContext';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SidebarProvider>
    <CartProvider>
    <ProductProvider>
      <React.StrictMode>
          <App />
      </React.StrictMode>
    </ProductProvider>
    </CartProvider>
  </SidebarProvider>
);
