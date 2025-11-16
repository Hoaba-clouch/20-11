// File: ShinyButton.jsx (PHIÊN BẢN ĐÃ SỬA)

import React from 'react';
import "./ShinyButton.css"

// 1. Nhận các props cần thiết: onClick, children (cho nội dung nút), và className
export default function ShinyButton({ onClick, children, className }) {
  
  const defaultContent = "MỞ TOÀN BỘ ẢNH";
  // Nếu không truyền children (như huynh đang làm), dùng nội dung mặc định
  const content = children || defaultContent; 

  const handleInternalClick = (event) => {
    // Nếu có hàm onClick được truyền từ bên ngoài, gọi nó
    if (onClick) {
      onClick(event); 
    }
    // (Có thể giữ lại console.log hoặc logic nội bộ khác ở đây)
    console.log('Nút ShinyButton đã được nhấn!');
  };
  
  return (
    // Áp dụng className từ bên ngoài vào button-wrap (nếu có)
    <div className={`button-wrap ${className || ''}`}> 
      
      {/* 2. Gán hàm gọi ĐÚNG cho thẻ button */}
      <button className='button' onClick={handleInternalClick}>
        <span>{content}</span>
      </button>
      
      <div className="button-shadow"></div>
    </div>
  );
}