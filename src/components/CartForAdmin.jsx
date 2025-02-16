import { useCart } from "../context/CartContext.jsx";
import { useState, useEffect } from "react";

export default function CartForAdmin({ product, setProducts, setDeletedProducts }) {
  const { cart, addToCart } = useCart();
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    setIsInCart(cart.some((item) => item.id === product.id));
  }, [cart, product.id]);

  const handleEdit = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${product.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: "Updated Product",
          price: product.price,
          description: product.description,
          image: product.image,
          category: product.category,
        }),
      });
      const data = await response.json();
      console.log("Updated Product:", data);
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${product.id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        console.log("Deleted Product:", product.id);
        
        // Mahsulotni o‘chirilganlar ro‘yxatiga qo‘shamiz
        setDeletedProducts((prevDeleted) => [...prevDeleted, product.id]);

        // Ko‘rinayotgan mahsulotlar ro‘yxatidan olib tashlaymiz
        setProducts((prevProducts) => prevProducts.filter((item) => item.id !== product.id));
      } else {
        console.error("O‘chirishda xatolik yuz berdi");
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div className="border p-4 rounded-lg shadow-lg">
      <img src={product.image} alt={product.title} className="w-full h-40 object-cover" />
      <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
      <p className="text-green-600 font-bold">${product.price}</p>
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={handleEdit}
          className="w-[200px] h-[40px] bg-[grey] mt-2 block text-white flex justify-center text-[20px] rounded-[8px] pt-[4px]"
        >
          Tahrirlash
        </button>
        <button
          onClick={handleDelete}
          className="w-[200px] h-[40px] bg-[red] mt-2 block text-white flex justify-center text-[20px] rounded-[8px] pt-[4px]"
        >
          Ochirish
        </button>
      </div>
    </div>
  );
}
