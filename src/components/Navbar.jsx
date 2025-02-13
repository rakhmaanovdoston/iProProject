import { IoMdMenu, IoMdSearch } from "react-icons/io";
import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import logo from "../assets/Logo.svg";

export default function Navbar({ setSearchQuery }) {
  const [localSearchQuery, setLocalSearchQuery] = useState("");
  const { cart } = useCart(); // Savatcha ma'lumotlarini olish

  const handleSearch = () => {
    setSearchQuery(localSearchQuery);
    if (localSearchQuery.trim() === "") {
      setSearchQuery("");
    }
  };

  return (
    <nav className="w-full max-w-[1230px] flex flex-col sm:flex-row justify-between items-center m-auto mt-4 bg-white px-4 sm:px-6 lg:px-8 py-4 shadow-md mb-[20px]">
      {/* Logo */}
      <div className="flex items-center justify-between w-full sm:w-auto">
        <img src={logo} alt="Logo" className="h-[40px] sm:h-[50px] md:h-[60px]" />
        <button className="sm:hidden w-[40px] h-[40px] bg-[#4d5ef6] text-white rounded-[8px] flex items-center justify-center text-[24px]">
          <IoMdMenu />
        </button>
      </div>

      {/* Search and Buttons */}
      <div className="flex items-center justify-between gap-4 w-full sm:w-auto mt-4 sm:mt-0">
        <div className="flex items-center gap-2 sm:gap-4 w-full max-w-[500px]">
          <input
            type="search"
            placeholder="Maxsulotlarni izlash"
            className="w-full sm:w-[350px] md:w-[396px] h-[40px] sm:h-[46px] border-[1px] border-solid border-[#e4e7ee] rounded-[8px] p-[10px] text-sm sm:text-base outline-0"
            value={localSearchQuery}
            onChange={(e) => setLocalSearchQuery(e.target.value)}
          />
          <button 
            onClick={handleSearch}
            className="w-[50px] h-[40px] sm:w-[60px] sm:h-[46px] bg-[#0d63f3] text-white rounded-[8px] text-[20px] sm:text-[24px] p-auto flex items-center justify-center gap-[5px] cursor-pointer"
          >
            <IoMdSearch />
          </button>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <button className="w-[40px] h-[40px] sm:w-[46px] sm:h-[46px] bg-[#e4e7ee] text-[#0d63f3] rounded-[8px] text-[20px] sm:text-[24px] p-auto flex items-center justify-center gap-[5px] cursor-pointer">
            <FaRegHeart />
          </button>

          {/* Savatcha tugmasi */}
          <Link to="/cart" className="relative">
            <button className="w-[40px] h-[40px] sm:w-[46px] sm:h-[46px] bg-[#e4e7ee] text-[#0d63f3] rounded-[8px] text-[20px] sm:text-[24px] p-auto flex items-center justify-center gap-[5px] cursor-pointer">
              <MdOutlineShoppingCart />
            </button>
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cart.length}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Desktop Navigation Menu */}
      <div className="hidden sm:flex items-center justify-center gap-6 mt-4 sm:mt-0">
        <button className="w-[149px] h-[46px] bg-gradient-to-r from-[#4d5ef6] to-[#f64d4d] flex items-center justify-center text-white rounded-[8px] text-base">
          <IoMdMenu className="text-[24px]" /> KATALOG
        </button>
      </div>
    </nav>
  );
}
