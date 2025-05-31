import { Outlet, Link, useNavigate } from "react-router-dom";

export default function Layout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // ریست اطلاعات کاربر
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="min-h-screen flex flex-col" dir="rtl">
      <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl">سامانه ثبت شرکت</h1>
        <button onClick={handleLogout} className="bg-red-500 px-3 py-1 rounded">خروج</button>
      </header>
      <main className="flex-1 p-4 bg-gray-50">
        <Outlet />
      </main>
    </div>
  );
}
