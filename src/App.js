import React from "react";
import { Routes, Route } from "react-router-dom";

import AppWrapper from "./components/AppWrapper/AppWrapper";
import HomePage from "./pages/HomePage";
import UserProfilePage from "./pages/UserProfilePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<UserProfilePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </AppWrapper>
  );
}

export default App;
