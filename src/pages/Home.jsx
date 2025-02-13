import { useEffect, useState } from "react";
import Navbar from "../components/Navbar"; // Navbar komponentini import qilish
import ProductCard from "../components/ProductCard"; // ProductCard komponenti

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");  // searchQuery va setSearchQuery holatini yaratish
  const [categories, setCategories] = useState([]); // Kategoriyalar uchun state
  const [products, setProducts] = useState([]); // Mahsulotlar uchun state
  const [loading, setLoading] = useState(true); // Yuklanayotgan holat
  const [selectedCategory, setSelectedCategory] = useState(null); // Tanlangan kategoriya
  const [isCategoryOpen, setIsCategoryOpen] = useState(false); // Kategoriyalar menyusining ochilganligi holati

  // Kategoriyalarni fetch qilish
  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products/categories");
        const data = await response.json();
        setCategories(data); // Kategoriyalarni saqlash
      } catch (error) {
        console.error("Kategoriyalarni olishda xatolik:", error);
      }
    };

    getCategories();
  }, []);

  // Mahsulotlarni fetch qilish, kategoriya o'zgarganda
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      try {
        let url = "https://fakestoreapi.com/products"; // Mahsulotlarni olish uchun URL
        if (selectedCategory && selectedCategory !== "all") {
          // Kategoriya bo'yicha filtr qilish
          url = `https://fakestoreapi.com/products/category/${selectedCategory}`;
        }
        const response = await fetch(url);
        const data = await response.json();
        setProducts(data); // Mahsulotlarni saqlash
      } catch (error) {
        console.error("Mahsulotlarni olishda xatolik:", error);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, [selectedCategory]); // Kategoriya o'zgarganda mahsulotlarni qayta olish

  // Mahsulotlarni qidiruvga moslashtirish
  const filteredProducts = searchQuery.trim() === "" 
    ? products  // Agar qidiruv bo'sh bo'lsa, barcha mahsulotlarni ko'rsatish
    : products.filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div className="bg-[azure] min-h-screen px-4 sm:px-6 lg:px-8 pt-[20px]">
      <Navbar setSearchQuery={setSearchQuery} /> {/* setSearchQuery ni Navbar ga uzatish */}
      
      <div className="flex flex-col sm:flex-row gap-6">
        {/* Kategoriyalarni render qilish */}
        <div className="w-full sm:w-1/4">
          <h2 className="text-xl font-bold mb-4">Kategoriyalar</h2>
          
          {/* Katalog tugmasi */}
          <button 
            className="sm:hidden w-full bg-blue-500 text-white p-2 rounded mb-4"
            onClick={() => setIsCategoryOpen(!isCategoryOpen)}
          >
            {isCategoryOpen ? "Kategoriyalarni Yopish" : "Kategoriyalarni Ko'rsatish"}
          </button>

          {/* Kategoriyalar ro'yxati */}
          <ul className={`${isCategoryOpen ? "block" : "hidden"} sm:block space-y-2`}>
            <li
              key="all"
              className="cursor-pointer hover:bg-gray-200 p-2 rounded"
              onClick={() => setSelectedCategory("all")} // Barcha mahsulotlar
            >
              <span>All</span>
            </li>
            {categories.map((category) => (
              <li
                key={category}
                className="cursor-pointer hover:bg-gray-200 p-2 rounded"
                onClick={() => setSelectedCategory(category)} // Kategoriya tanlanganda
              >
                {/* Kategoriyaning birinchi harfini katta qilish */}
                <span>{category.charAt(0).toUpperCase() + category.slice(1)}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Mahsulotlarni render qilish */}
        <div className="w-full sm:w-3/4">
          {loading ? (
            <p className="text-center text-lg">Yuklanmoqda...</p>
          ) : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} /> // ProductCard komponentini chaqirish
              ))}
            </div>
          ) : (
            <p className="text-center text-lg text-red-500">Mahsulotlar topilmadi.</p>
          )}
        </div>
      </div>
    </div>
  );
}
