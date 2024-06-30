// Checkout.js 
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/Product/CartContext';
import CartItem from '../../components/Product/CartItem'; // Assuming CartItem is in the same directory

const Checkout = () => {
  const { cart } = useContext(CartContext);

  const totalItems = cart.reduce((total, item) => total + item.amount, 0);
  const totalCost = cart.reduce((total, item) => total + (item.amount * item.price), 0).toFixed(2);

  const handleDownloadPDF = () => {
    alert('Implementare la generazione e il download del PDF');
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Riepilogo Carrello</h1>
      <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
        <div className="w-full lg:w-1/2">
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">Prodotti nel Carrello</h2>
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="bg-gray-100 p-4 rounded-md mb-6">
            <h2 className="text-2xl font-bold mb-2">Riepilogo Spese</h2>
            <div className="flex justify-between mb-2">
              <div>Pezzi Totali</div>
              <div>{totalItems}</div>
            </div>
            <div className="flex justify-between mb-2">
              <div>Totale</div>
              <div>${totalCost}</div>
            </div>
          </div>
          <div className="flex justify-end">
            <button
              onClick={handleDownloadPDF}
              className="bg-yellow-300 hover:bg-blue-600 text-white py-2 px-4 rounded-md mr-4 focus:outline-none"
            >
              Scarica PDF
            </button>
            <Link
              to="/cart-report"
              className="bg-yellow-300 hover:bg-yellow-300 text-white py-2 px-4 rounded-md focus:outline-none"
            >
              Concludi Ordine
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
