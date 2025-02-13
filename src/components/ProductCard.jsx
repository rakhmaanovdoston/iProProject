import { Link } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useCart } from "../context/CartContext.jsx";
import { useState, useEffect } from "react";

export default function ProductCard({ product }) {
  const { cart, addToCart } = useCart();
  const [isInCart, setIsInCart] = useState(false);

  // Mahsulot savatchada borligini tekshirish
  useEffect(() => {
    setIsInCart(cart.some((item) => item.id === product.id));
  }, [cart, product.id]);

  const handleAddToCart = () => {
    if (!isInCart) {
      addToCart(product);
    }
  };

  return (
    <div className="border p-4 rounded-lg shadow-lg">
      <img src={product.image} alt={product.title} className="w-full h-40 object-cover" />
      <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
      <p className="text-green-600 font-bold">${product.price}</p>
      <div className="flex justify-between items-center mt-4">
        <Link
          to={`/product/${product.id}`}
          className="w-[200px] h-[40px] bg-[#0d63f3] mt-2 block text-white flex justify-center text-[20px] rounded-[8px] pt-[4px]"
        >
          Sotib Olish
        </Link>
        <button
          onClick={handleAddToCart}
          className={`w-[40px] h-[40px] text-[24px] rounded-full flex items-center justify-center ${
            isInCart ? "bg-green-500 text-white" : "bg-gray-200 text-black"
          }`}
        >
          <MdOutlineShoppingCart />
        </button>
      </div>
    </div>
  );
}
