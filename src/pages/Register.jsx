import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    alert("Ro‘yxatdan o‘tish muvaffaqiyatli!");
    navigate("/login");
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Ro‘yxatdan o‘tish</h1>
      <form onSubmit={handleRegister} className="max-w-sm mx-auto">
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
        <button className="bg-green-600 text-white w-full py-2 rounded">Ro‘yxatdan o‘tish</button>
      </form>
    </div>
  );
}