document.getElementById("companyForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const formData = new FormData(this);
  const data = {};

  formData.forEach((value, key) => {
    if (key === "termsAccepted" || key === "accountLocked") {
      data[key] = formData.get(key) === "on";
    } else {
      data[key] = value;
    }
  });

  try {
    const res = await fetch("https://company-registerapi.onrender.com/api/companies", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      alert("ثبت با موفقیت انجام شد");
      this.reset();
    } else {
      alert("خطا در ثبت اطلاعات");
    }
  } catch (error) {
    alert("خطا در ارسال اطلاعات: " + error.message);
  }
});
