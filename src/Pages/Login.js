import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("https://company-registerapi.onrender.com/api/companies");
      const companies = await res.json();

      const user = companies.find(
        (c) => c.email === email && c.password === password
      );

      if (user) {
        onLogin(user);
        navigate("/layout");
      } else {
        setError("ایمیل یا رمز عبور اشتباه است");
      }
    } catch (err) {
      setError("خطا در ارتباط با سرور");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 border rounded" dir="rtl">
      <h2 className="text-xl mb-4 text-center">ورود</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="ایمیل"
          className="w-full border px-3 py-2 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="رمز عبور"
          className="w-full border px-3 py-2 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <p className="text-red-600">{error}</p>}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded"
        >
          ورود
        </button>
      </form>
    </div>
  );
}
