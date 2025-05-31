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

  const res = await fetch("http://localhost:3001/companies", {
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
});
