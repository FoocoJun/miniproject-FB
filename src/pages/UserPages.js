import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";

const UserPages = () => {
  return (
    <Routes>
      {/* 일기장 페이지 // 일기장 : 소현 */}
      <Route path="list" element={null} />
      {/* 잘못 된 접근 페이지 */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default UserPages;
