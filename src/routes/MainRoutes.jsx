import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import EditContactPage from "../pages/EditContactPage";
import AddContact from "../pages/AddContact";

const MainRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddContact />} />
        <Route path="/edit/:id" element={<EditContactPage />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
