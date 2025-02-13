import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Mahsulotni savatchaga qo‘shish
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);

      if (existingProduct) {
        // Agar mahsulot allaqachon bor bo‘lsa, uning sonini oshiramiz
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // Yangi mahsulotni qo‘shamiz
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Mahsulotni savatchadan olib tashlash
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Savatchadagi barcha mahsulotlar sonini hisoblash
  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, getTotalItems }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
