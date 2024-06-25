import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import CartItem from './CartItem'; // Assuming CartItem is in the same directory

const CartReport = () => {
  const { cart, incrementAmount, decrementAmount, removeItem } = useContext(CartContext);

  const totalItems = cart.reduce((total, item) => total + item.amount, 0);
  const totalCost = cart.reduce((total, item) => total + (item.amount * item.price), 0).toFixed(2);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 text-center lg:text-left">Report Carrello</h1>
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2 text-center lg:text-left">Prodotti nel Carrello</h2>
        <div className="space-y-4">
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="bg-gray-100 p-4 rounded-md mb-6">
        <h2 className="text-2xl font-bold mb-2 text-center lg:text-left">Riepilogo Spese</h2>
        <div className="flex justify-between mb-2">
          <div>Pezzi Totali</div>
          <div>{totalItems}</div>
        </div>
        <div className="flex justify-between mb-2">
          <div>Totale</div>
          <div>${totalCost}</div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-end space-y-4 sm:space-y-0 sm:space-x-4">
        <Link
          to="/checkout"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none text-center sm:text-left"
        >
          Torna al Checkout
        </Link>
        <button
          onClick={() => console.log('Implementare azione di svuotamento del carrello')}
          className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md focus:outline-none text-center sm:text-left"
        >
          Svuota Carrello
        </button>
      </div>
    </div>
  );
};

export default CartReport;
