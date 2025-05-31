import React, { useState } from "react";

export default function CompanyRegisterForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    fatherName: "",
    dateOfBirth: "",
    gender: "",
    province: "",
    address: "",
    phoneNumber1: "",
    phoneNumber2: "",
    companyName: "",
    companyEstablished: "",
    email: "",
    password: "",
    telegramUserId: "",
    image: "",
    termsAccepted: false,
    accountLocked: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://company-registerapi.onrender.com/api/companies", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("ثبت با موفقیت انجام شد");
        setFormData({
          firstName: "",
          lastName: "",
          fatherName: "",
          dateOfBirth: "",
          gender: "",
          province: "",
          address: "",
          phoneNumber1: "",
          phoneNumber2: "",
          companyName: "",
          companyEstablished: "",
          email: "",
          password: "",
          telegramUserId: "",
          image: "",
          termsAccepted: false,
          accountLocked: false,
        });
      } else {
        alert("خطا در ثبت اطلاعات");
      }
    } catch (error) {
      alert("خطا در ارسال اطلاعات: " + error.message);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow mt-6">
      <h1 className="text-2xl font-bold mb-4 text-center">فرم ثبت‌نام شرکت</h1>
      <form onSubmit={handleSubmit} className="space-y-4" dir="rtl" lang="fa">
        <input
          name="firstName"
          placeholder="نام"
          className="border border-gray-300 rounded px-3 py-2 w-full"
          value={formData.firstName}
          onChange={handleChange}
        />
        <input
          name="lastName"
          placeholder="نام خانوادگی"
          className="border border-gray-300 rounded px-3 py-2 w-full"
          value={formData.lastName}
          onChange={handleChange}
        />
        <input
          name="fatherName"
          placeholder="نام پدر"
          className="border border-gray-300 rounded px-3 py-2 w-full"
          value={formData.fatherName}
          onChange={handleChange}
        />
        <input
          type="date"
          name="dateOfBirth"
          className="border border-gray-300 rounded px-3 py-2 w-full"
          value={formData.dateOfBirth}
          onChange={handleChange}
        />

        <select
          name="gender"
          className="border border-gray-300 rounded px-3 py-2 w-full"
          value={formData.gender}
          onChange={handleChange}
        >
          <option value="">انتخاب جنسیت</option>
          <option value="male">مرد</option>
          <option value="female">زن</option>
        </select>

        <input
          name="province"
          placeholder="استان"
          className="border border-gray-300 rounded px-3 py-2 w-full"
          value={formData.province}
          onChange={handleChange}
        />
        <input
          name="address"
          placeholder="آدرس"
          className="border border-gray-300 rounded px-3 py-2 w-full"
          value={formData.address}
          onChange={handleChange}
        />
        <input
          name="phoneNumber1"
          placeholder="شماره تماس ۱"
          className="border border-gray-300 rounded px-3 py-2 w-full"
          value={formData.phoneNumber1}
          onChange={handleChange}
        />
        <input
          name="phoneNumber2"
          placeholder="شماره تماس ۲"
          className="border border-gray-300 rounded px-3 py-2 w-full"
          value={formData.phoneNumber2}
          onChange={handleChange}
        />
        <input
          name="companyName"
          placeholder="نام شرکت"
          className="border border-gray-300 rounded px-3 py-2 w-full"
          value={formData.companyName}
          onChange={handleChange}
        />
        <input
          type="date"
          name="companyEstablished"
          className="border border-gray-300 rounded px-3 py-2 w-full"
          value={formData.companyEstablished}
          onChange={handleChange}
        />
        <input
          name="email"
          type="email"
          placeholder="ایمیل"
          className="border border-gray-300 rounded px-3 py-2 w-full"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          placeholder="رمز عبور"
          className="border border-gray-300 rounded px-3 py-2 w-full"
          value={formData.password}
          onChange={handleChange}
        />
        <input
          name="telegramUserId"
          placeholder="شناسه تلگرام"
          className="border border-gray-300 rounded px-3 py-2 w-full"
          value={formData.telegramUserId}
          onChange={handleChange}
        />
        <input
          name="image"
          type="text"
          placeholder="لینک تصویر"
          className="border border-gray-300 rounded px-3 py-2 w-full"
          value={formData.image}
          onChange={handleChange}
        />

        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="termsAccepted"
            checked={formData.termsAccepted}
            onChange={handleChange}
          />
          <span>با قوانین موافقم</span>
        </label>

        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="accountLocked"
            checked={formData.accountLocked}
            onChange={handleChange}
          />
          <span>قفل بودن حساب</span>
        </label>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded w-full"
        >
          ثبت اطلاعات
        </button>
      </form>
    </div>
  );
}
