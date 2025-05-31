import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Entry from "./Pages/Entry";
import CompanyRegisterForm from "./Pages/CompanyRegisterForm";
import Login from "./Pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Entry />} />
        <Route path="/login" element={<Login />} />
        <Route path="/CompanyRegisterForm" element={<CompanyRegisterForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
