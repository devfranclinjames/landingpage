import React, { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

// context for the shopping cart
const CartContext = createContext();

export const useCart = () => useContext(CartContext);

const ShoppingCart = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Load cart from cookies on component mount
    const savedCart = Cookies.get("shoppingCart");
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart).map((item) => ({
          ...item,
          price: parseFloat(item.price), 
          quantity: parseInt(item.quantity, 10), 
          discounted: item.discounted ? parseFloat(item.discounted) : null,
        }));
        setCart(parsedCart);
      } catch (error) {
        console.error("Failed to parse cart from cookies:", error);
        setCart([]); // Reset cart on error
      }
    }
  }, []);

  
  const updateCartCookie = (updatedCart) => {
    setCart(updatedCart);
    Cookies.set("shoppingCart", JSON.stringify(updatedCart), { expires: 7 });
  };

  // ADD
  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      alert("This item is already in the cart!");
    } else {
      const newCart = [...cart, { ...item, quantity: 1 }];
      updateCartCookie(newCart);
    }
  };

  // UPDATE
  const editCartItem = (id, newQuantity) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    updateCartCookie(updatedCart);
  };

  // DELETE
  const deleteFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    updateCartCookie(updatedCart);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        editCartItem,
        deleteFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default ShoppingCart;
