import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Entry from "./Pages/Entry";
import Login from "./Pages/Login";
import CompanyRegisterForm from "./Pages/CompanyRegisterForm";
import PrivateRoute from "./components/PrivateRoute";
import Layout from "./components/Layout";
import Dashboard from "./Pages/Dashboard";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Entry />} />
        <Route path="/login" element={<Login onLogin={() => setIsLoggedIn(true)} />} />
        <Route path="/register" element={<CompanyRegisterForm />} />
        <Route element={<PrivateRoute isLoggedIn={isLoggedIn} />}>
          <Route path="/layout" element={<Layout />}>
            <Route index element={<Dashboard />} />
          </Route>
        </Route>
         <Route path="*" element={<Navigate to="/entry" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
