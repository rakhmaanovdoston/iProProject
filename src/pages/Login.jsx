import { useState } from "react";
import { useAuth } from "../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const {login} = useAuth();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const userData = {email};
        login(userData);
        navigate("/")
    }

    return (
        <div className="container mx-auto p-6">
          <h1 className="text-3xl font-bold mb-4">Login</h1>
          <form onSubmit={handleLogin} className="max-w-sm mx-auto">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border w-full p-2 mb-2 rounded"
              required
            />
            <input
              type="password"
              placeholder="Parol"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border w-full p-2 mb-2 rounded"
              required
            />
            <button className="bg-blue-600 text-white w-full py-2 rounded">Login</button>
          </form>
        </div>
      );
}