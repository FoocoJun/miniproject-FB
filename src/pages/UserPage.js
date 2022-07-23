import React from "react";
import { Route, Routes } from "react-router-dom";

const UserPage = () => {
  return (
    <Routes>
      {/* 일기장 페이지 // 일기장 : 소현 */}
      <Route path="/user/list" element={null} />
    </Routes>
  );
};

export default UserPage;
