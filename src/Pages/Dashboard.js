export default function Dashboard({ user }) {
  return (
    <div className="p-6" dir="rtl" lang="fa">
      <h1 className="text-2xl mb-4">داشبورد</h1>
      <p>خوش آمدید، {user.email}</p>
      {/* اینجا می‌توانید محتوای داشبورد را اضافه کنید */}
    </div>
  );
}
