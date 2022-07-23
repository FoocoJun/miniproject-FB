import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import PostListPage from "./PostListPage";

const UserPages = () => {
  return (
    <Routes>
      {/* 일기장 페이지 // 일기장 : 소현 */}
      <Route path="list" element={<PostListPage />} />
      {/* 잘못 된 접근 페이지 */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default UserPages;
