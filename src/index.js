import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//importiamo il provider di Home
import ProductProvider from './contexts/ProductContext';
//importiamo il provider di Sidebar
import SidebarProvider from './contexts/SidebarContext';
//importiamo il provider di Cart
import CartProvider from './contexts/CartContext';




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
