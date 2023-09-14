import React, { createContext, useState } from 'react'; // Make sure to import createContext and useState from 'react'
import { PRODUCTS } from '../products';
import Product from '../Pages/Shop/product';

export const ShopContext = createContext(null); // Create a context with an initial default value of null

function getDefaultCart() {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) { // Fixed the loop condition
    cart[i] = 0;
  }
  return cart;
}

const ShopContextProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState(getDefaultCart());

  function addToCart(itemId) {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  }

  function removeFromCart(itemId) {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  }

  function updateCartItem(newAmount, itemId){
    setCartItem((prev) => ({...prev, [itemId]: newAmount}))
  }

  function getTotalCartItem(){
    let totalAmount = 0;

    for (const item in cartItem){ // loop through an object
      if (cartItem[item] > 0){
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item))
        totalAmount += cartItem[item] * itemInfo.price
      }
    }
    return totalAmount;

  }
  const ContextValue = { cartItem, addToCart, removeFromCart, updateCartItem, getTotalCartItem };

  return (
    <ShopContext.Provider value={ContextValue}>
        {children}
    </ShopContext.Provider>
  );
}

export default ShopContextProvider;
