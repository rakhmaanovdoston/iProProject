import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa";
import Navbar from "../components/Navbar.jsx";

export default function Product() {
  const { id } = useParams(); // URL'dan id ni olish
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Mahsulot yuklashda xatolik:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-center">
          <div className="w-32 h-32 bg-gray-300 rounded-md mx-auto mb-4"></div>
          <p className="text-gray-400">Yuklanmoqda...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500 text-lg">Mahsulot topilmadi!</p>
      </div>
    );
  }

  return (
    <div className="bg-[azure] min-h-screen px-4 sm:px-6 lg:px-8 pt-[20px] ">
      <Navbar/>
      {/* Orqaga qaytish tugmasi */}
      <Link to="/" className="flex items-center text-blue-500 hover:underline">
        <FaArrowLeft className="mr-2" /> Bosh sahifaga qaytish
      </Link>

      {/* Mahsulot kartasi */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6 bg-white p-6 shadow-lg rounded-lg">
        {/* Rasm */}
        <div className="flex justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="w-64 h-64 object-contain"
          />
        </div>

        {/* Ma'lumotlar */}
        <div className="flex flex-col justify-between">
          <h1 className="text-2xl font-bold text-gray-800">{product.title}</h1>
          <p className="text-gray-600 text-sm">{product.description}</p>

          {/* Narx */}
          <p className="text-2xl font-bold text-green-600 mt-4">${product.price}</p>

          {/* Tugmalar */}
          <div className="flex items-center gap-4 mt-6">
            <button className="flex-1 bg-blue-600 text-white py-3 rounded-md text-lg hover:bg-blue-700 transition cursor-pinter">
              Sotib Olish
            </button>
            <button className="w-12 h-12 bg-gray-200 rounded-md flex items-center justify-center text-2xl text-gray-700 hover:bg-gray-300 transition">
              <MdOutlineShoppingCart className="cursor-pointer" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
