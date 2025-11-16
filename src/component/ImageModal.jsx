// ImageModal.jsx

import React, { useState } from 'react';
import './ImageModal.css'; // File CSS cho Modal

// Dữ liệu giả định cho hình ảnh (huynh thay bằng data thực tế của mình)
const DUMMY_IMAGES = [
  { id: 1, url: '../assets/images/Anh-cuon-sach-nghe-thuat.jpg', alt: 'Hình ảnh 1' },
  { id: 2, url: 'path/to/image2.jpg', alt: 'Hình ảnh 2' },
  { id: 3, url: 'path/to/image3.jpg', alt: 'Hình ảnh 3' },
  // ... thêm nhiều ảnh khác
];

export default function ImageModal({ isOpen, onClose, images = DUMMY_IMAGES }) {
      const [currentImageIndex, setCurrentImageIndex] = useState(0);
  if (!isOpen) return null;

  // State để quản lý hình ảnh đang được hiển thị trong Gallery

  
  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex === images.length - 1 ? 0 : prevIndex + 1)
    );
  };

  const goToPrev = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex === 0 ? images.length - 1 : prevIndex - 1)
    );
  };

  return (
    // Backdrop (Lớp nền đen mờ)
    <div className="modal-backdrop" onClick={onClose}>
      {/* Modal Content - Ngăn sự kiện click lan ra backdrop */}
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-btn" onClick={onClose}>
          &times; {/* Ký tự X */}
        </button>

        <div className="image-gallery">
          {/* Nút Previous */}
          <button className="nav-btn prev" onClick={goToPrev}>
            &#10094;
          </button>
          
          {/* Hình ảnh hiển thị chính */}
          <img 
            src={images[currentImageIndex].url} 
            alt={images[currentImageIndex].alt} 
            className="main-image"
          />
          
          {/* Nút Next */}
          <button className="nav-btn next" onClick={goToNext}>
            &#10095;
          </button>
        </div>

        {/* Thanh xem trước (Thumbnail/Preview) */}
        <div className="thumbnail-strip">
          {images.map((image, index) => (
            <img
              key={image.id}
              src={image.url}
              alt={image.alt}
              className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}