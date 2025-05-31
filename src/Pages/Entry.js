import { Link } from "react-router-dom";

export default function Entry() {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4 bg-gray-100" dir="rtl">
      <h1 className="text-3xl font-bold">به سامانه خوش آمدید</h1>
      <div className="flex space-x-4">
        <Link to="/login" className="bg-blue-600 text-white px-4 py-2 rounded">ورود</Link>
        <Link to="/register" className="bg-green-600 text-white px-4 py-2 rounded">Rejester</Link>
      </div>
    </div>
  );
}
