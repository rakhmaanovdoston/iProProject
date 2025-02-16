import './App.css';
import { useState } from "react"; // useState import qilindi
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Product from './pages/Product';
import Cart from './pages/Cart';
import Login from './pages/Login';
import { CartProvider } from './context/CartContext.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import Register from './pages/Register';
import Footer from './components/Footer.jsx';
import Admin from './pages/Admin.jsx';

function App() {
  const [addedProducts, setAddedProducts] = useState([]); // Yangi holat yaratildi

  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Routes>
            {/* addedProducts prop sifatida Home ga uzatildi */}
            <Route path="/" element={<Home addedProducts={addedProducts} />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/admin/*" element={<Admin addedProducts={addedProducts} />} />
          </Routes>
        </Router>
      </CartProvider>
      <Footer />
    </AuthProvider>
  );
}

export default App;
