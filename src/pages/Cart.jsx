import { Link } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import { useCart } from "../context/CartContext.jsx";
import { FaArrowLeft } from "react-icons/fa";

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="container mx-auto p-6 mt-[15px]">
      <Navbar/>
      <h1 className="text-3xl font-bold mb-6 text-center">Savat</h1>
      
      <Link to="/" className="flex items-center text-blue-500 hover:underline">
        <FaArrowLeft className="mr-2" /> Bosh sahifaga qaytish
      </Link>

      {cart.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-[50vh]">
          <p className="text-lg text-gray-500">Savat bo‘sh</p>
          <img
            src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
            alt="Empty Cart"
            className="w-40 h-40 mt-4 opacity-60"
          />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-[15px]">
          {cart.map((item) => (
            <div key={item.id} className="border p-4 rounded-lg shadow-lg flex flex-col items-center bg-white">
              <img src={item.image} alt={item.title} className="w-32 h-32 object-cover rounded-md" />
              <h2 className="text-lg font-semibold mt-2 text-center">{item.title}</h2>
              <p className="text-green-600 font-bold mt-1">${item.price}</p>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700 mt-3 transition-all cursor-pointer"
              >
                O‘chirish
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
