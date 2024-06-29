import React, { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };
    const cartItem = cart.find((item) => item.id === id);

    if (cartItem) {
      const newCart = cart.map((item) =>
        item.id === id ? { ...item, amount: cartItem.amount + 1 } : item
      );
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  const incrementAmount = (id) => {
    const newCart = cart.map((item) =>
      item.id === id ? { ...item, amount: item.amount + 1 } : item
    );
    setCart(newCart);
  };

  const decrementAmount = (id) => {
    const newCart = cart
      .map((item) =>
        item.id === id ? { ...item, amount: item.amount - 1 } : item
      )
      .filter((item) => item.amount > 0);
    setCart(newCart);
  };

  const removeItem = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
  };

  const removeAllItem = () => {
    setCart([]);
  };

  useEffect(() => {
    if (cart.length > 0) {
      console.log(cart);
    }
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, addToCart, incrementAmount, decrementAmount, removeItem, removeAllItem }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
