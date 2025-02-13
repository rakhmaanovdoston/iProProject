import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Product from './pages/Product';
import Cart from './pages/Cart';
import Login from './pages/Login';
import { CartProvider } from './context/CartContext.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import Register from './pages/Register';
import Footer from './components/Footer.jsx';

function App() {

  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          {/* <Navbar /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Router>
      </CartProvider>
      <Footer/>
    </AuthProvider>
  )
}

export default App
