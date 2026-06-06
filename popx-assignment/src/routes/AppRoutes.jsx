import { BrowserRouter, Routes, Route } from "react-router-dom";

import Welcome from "../pages/Welcome";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Account from "../pages/Account";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;