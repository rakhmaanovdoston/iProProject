import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import CartForAdmin from "../components/CartForAdmin";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export default function Admin({ addedProducts }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [deletedProducts, setDeletedProducts] = useState([]); // O‘chirilgan mahsulotlar ID'larini saqlash
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

        // O‘chirilgan mahsulotlarni filter qilib saqlaymiz
        const filteredProducts = data.filter(product => !deletedProducts.includes(product.id));

        setProducts(filteredProducts);
      } catch (error) {
        console.error("Mahsulotlarni olishda xatolik:", error);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, [selectedCategory, deletedProducts]); // deletedProducts o‘zgarganda qayta yuklaymiz

  // Admin panelda qo‘shilgan mahsulotlarni ham ko‘rsatish
  const allProducts = [...products, ...addedProducts];

  // Qidiruv bo‘yicha filtr
  const filteredProducts = searchQuery.trim() === ""
    ? allProducts
    : allProducts.filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div className="bg-[azure] min-h-screen px-4 sm:px-6 lg:px-8 pt-[20px]">
      <Navbar setSearchQuery={setSearchQuery} />

      <Link to="/" className="flex items-center text-blue-500 hover:underline mx-[230px] my-[20px]">
        <FaArrowLeft className="mr-2" /> Bosh sahifaga qaytish
      </Link>

      <div className="flex flex-col sm:flex-row gap-6 justify-center">
        <div className="w-full sm:w-3/4">
          {loading ? (
            <p className="text-center text-lg">Yuklanmoqda...</p>
          ) : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {filteredProducts.map((product, index) => (
                <CartForAdmin
                  key={index}
                  product={product}
                  setProducts={setProducts}
                  setDeletedProducts={setDeletedProducts} // O‘chirish uchun prop uzatamiz
                />
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
