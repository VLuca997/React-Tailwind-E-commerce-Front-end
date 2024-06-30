import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ProductContext } from '../../contexts/Product/ProductContext';
import { CartContext } from '../../contexts/Product/CartContext';

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return <div className="text-center mt-20 text-xl">Prodotto non trovato</div>;
  }

  const { title, price, description, image } = product;

  const handleAddToCart = () => {
    addToCart(product, product.id);
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      
      <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
        <div className="w-full lg:w-1/2">
          <img src={image} alt={title} className="rounded-lg shadow-lg w-full" />
        </div>
        <div className="w-full lg:w-1/2">
          <h1 className="text-3xl font-bold mb-4">{title}</h1>
          <p className="text-xl text-gray-700 mb-4">${price.toFixed(2)}</p>
          <p className="text-gray-600 mb-6">{description}</p>
          <div className='flex flex-row justify-evenly items-center '>
          <button
            onClick={handleAddToCart}
            className="bg-yellow-300 hover:bg-yellow-300 text-white py-2 px-4 rounded-md focus:outline-none"
          >
            Aggiungi al Carrello
          </button>
          <button
        onClick={handleGoBack}
        className="ml-2 bg-yellow-300 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none"
      >
        Torna Indietro
      </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
