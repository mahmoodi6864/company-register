import { Link } from "react-router-dom";

export default function Entry() {
  return (
    <div className="text-center mt-20">
      <h1 className="text-3xl mb-6">ورود یا ثبت نام</h1>
      <Link
        to="/login"
        className="bg-blue-500 text-white px-6 py-3 rounded mr-4"
      >
        ورود
      </Link>
      <Link
        to="/register"
        className="bg-green-500 text-white px-6 py-3 rounded"
      >
        ثبت نام
      </Link>
    </div>
  );
}
