import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";

export default function Home({ addedProducts }) { // addedProducts ni props sifatida qabul qiladi
  const [searchQuery, setSearchQuery] = useState("");
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products/categories");
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Kategoriyalarni olishda xatolik:", error);
      }
    };

    getCategories();
  }, []);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      try {
        let url = "https://fakestoreapi.com/products";
        if (selectedCategory && selectedCategory !== "all") {
          url = `https://fakestoreapi.com/products/category/${selectedCategory}`;
        }
        const response = await fetch(url);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Mahsulotlarni olishda xatolik:", error);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, [selectedCategory]);

  // Admin panelda qo‘shilgan mahsulotlarni ham ko‘rsatish
  const allProducts = [...products, ...addedProducts];

  const filteredProducts = searchQuery.trim() === "" 
    ? allProducts
    : allProducts.filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div className="bg-[azure] min-h-screen px-4 sm:px-6 lg:px-8 pt-[20px]">
      <Navbar setSearchQuery={setSearchQuery} />

      <div className="flex justify-end mb-4">
        <button 
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={() => navigate("/admin")}
        >
          Admin Panelga O‘tish
        </button>
      </div>

      <div className="flex flex-col sm:flex-row gap-6">
        <div className="w-full sm:w-1/4">
          <h2 className="text-xl font-bold mb-4">Kategoriyalar</h2>
          
          <button 
            className="sm:hidden w-full bg-blue-500 text-white p-2 rounded mb-4"
            onClick={() => setIsCategoryOpen(!isCategoryOpen)}
          >
            {isCategoryOpen ? "Kategoriyalarni Yopish" : "Kategoriyalarni Ko'rsatish"}
          </button>

          <ul className={`${isCategoryOpen ? "block" : "hidden"} sm:block space-y-2`}>
            <li
              key="all"
              className="cursor-pointer hover:bg-gray-200 p-2 rounded"
              onClick={() => setSelectedCategory("all")}
            >
              <span>All</span>
            </li>
            {categories.map((category) => (
              <li
                key={category}
                className="cursor-pointer hover:bg-gray-200 p-2 rounded"
                onClick={() => setSelectedCategory(category)}
              >
                <span>{category.charAt(0).toUpperCase() + category.slice(1)}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full sm:w-3/4">
          {loading ? (
            <p className="text-center text-lg">Yuklanmoqda...</p>
          ) : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {filteredProducts.map((product, index) => (
                <ProductCard key={index} product={product} />
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
