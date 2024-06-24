import React,{createContext,useEffect,useState} from 'react';


//creiamo il contesto del carrello:

export const CartContext = createContext();

  const CartProvider = ({children}) =>{
  const [cart,setCart] = useState([])

  //aggiungi al carrello:
  const addToCart = (product,id) =>{
    const newItem = {...product,amount:1}
    //controlliamo se l'item è gia nel carrello:
    const cartItem = cart.find((item) =>{
      return item.id === id
    })

    if(cartItem){
      const newCart = [...cart].map((item) => {
        if(item.id === id ){
          //se gia esiste allora incrementa.
          return {...item, amount: cartItem.amount + 1}
        }else{
          return item;
        }
      })
      setCart(newCart)
    }else{
      setCart([...cart,newItem])
    }
    
    
    
    
    // console.log(`il Prodotto [id: ${id} , Titolo: ${product.title} ]è stato aggiunto al carrello`)
  }
 useEffect(() => {
    if (cart.length > 0) {
      console.log(cart);
    }
  }, [cart]);

  return(
    <CartContext.Provider value={{cart, addToCart}}>
      {children}
    </CartContext.Provider>
  )
}


export default CartProvider;
