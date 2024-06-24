import React, { createContext, useEffect, useState } from 'react';

// creiamo il contesto del carrello:
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // aggiungi al carrello:
  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };
    // controlliamo se l'item è già nel carrello:
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

  // incrementare la quantità
  const incrementAmount = (id) => {
    const newCart = cart.map((item) =>
      item.id === id ? { ...item, amount: item.amount + 1 } : item
    );
    setCart(newCart);
  };

  // decrementare la quantità e rimuovere se 0
  const decrementAmount = (id) => {
    const newCart = cart
      .map((item) =>
        item.id === id ? { ...item, amount: item.amount - 1 } : item
      )
      .filter((item) => item.amount > 0);
    setCart(newCart);
  };
  // Funzione per rimuovere un elemento dal carrello
  const removeItem = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
};
  useEffect(() => {
    if (cart.length > 0) {
      console.log(cart);
    }
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, addToCart, incrementAmount, decrementAmount,removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
