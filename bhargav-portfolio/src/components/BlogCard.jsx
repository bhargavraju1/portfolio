// src/components/BlogCard.jsx
import React from "react";

const BlogCard = ({ title, summary }) => (
  <div className="bg-white p-4 shadow-md rounded-md border hover:shadow-lg transition-all">
    <h2 className="text-lg font-bold text-blue-900">{title}</h2>
    <p className="text-sm text-gray-600 mt-2">{summary}</p>
  </div>
);

export default BlogCard;
