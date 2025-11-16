import "./Gallery.scss";
import React, { useState } from 'react';
import ImageModal from './ImageModal';
import SliderModal from './SliderModal';
import ShinyButton from "./ShinyButton";
const yourImages = [
    { id: 1, url: "https://cdn.giaoducthoidai.vn/images/e401c228975606591bf047dfabd6358420d2bc5884d3dcdcfe1eb68d485aa1759299de8edcc4199bf5e576e408af6105bc63b4cc55323ef70a33248940d3c8c9/anh-minh-hoa.jpg", alt: "Mô tả ảnh " },
    { id: 2, url: "https://cdn.giaoducthoidai.vn/images/e401c228975606591bf047dfabd6358420d2bc5884d3dcdcfe1eb68d485aa175e90451d86376977e78d4fa322b971902/img0083-4.jpg", alt: "Mô tả ảnh 2" },
    { id: 2, url: "https://cdn-i.doisongphapluat.com.vn/resize/th/upload/2024/11/13/chi-phi-cho-van-nghe-20-11-ton-kem-lieu-co-can-thiet-va-dung-voi-tinh-than-tri-an-thay-co-dspl-2-15230409.jpg", alt: "Mô tả ảnh 2" },
    { id: 2, url: "https://haycafe.vn/wp-content/uploads/2021/12/Hinh-anh-thay-giao-va-hoc-sinh-tieu-hoc-800x585.jpg", alt: "Mô tả ảnh 2" },
    { id: 2, url: "https://haycafe.vn/wp-content/uploads/2021/12/Hinh-anh-co-giao-va-hoc-sinh-tieu-hoc-800x533.jpg", alt: "Mô tả ảnh 2" },
    { id: 2, url: "https://haycafe.vn/wp-content/uploads/2021/12/Hinh-anh-co-giao-va-hoc-sinh-mam-non-800x533.jpg", alt: "Mô tả ảnh 2" },
  
    
];
function Gallery() {
const [isSliderOpen, setIsSliderOpen] = useState(false);
  return (
    <section className="gallery">
      <div className="container">
        <h2 className="gallery-title">Khoảnh khắc & Hành trình tri thức</h2>

        <div className="gallery-grid">

          <div className="gallery-item">
            <img src="https://img.tripi.vn/cdn-cgi/image/width=700,height=700/https://gcs.tripi.vn/public-tripi/tripi-feed/img/482955fpJ/anh-mo-ta.png" alt="Teacher" />
          </div>

          <div className="gallery-item">
            <img src="https://img.tripi.vn/cdn-cgi/image/width=700,height=700/https://gcs.tripi.vn/public-tripi/tripi-feed/img/482955tZb/anh-mo-ta.png" alt="Coding" />
          </div>

          <div className="gallery-item">
            <img src="https://img.tripi.vn/cdn-cgi/image/width=700,height=700/https://gcs.tripi.vn/public-tripi/tripi-feed/img/482955GpJ/anh-mo-ta.png" alt="Books" />
          </div>

          <div className="gallery-item">
            <img src="https://img.tripi.vn/cdn-cgi/image/width=700,height=700/https://gcs.tripi.vn/public-tripi/tripi-feed/img/482955ZYc/anh-mo-ta.png" alt="Students" />
          </div>

          <div className="gallery-item wide">
            <img src="https://img.tripi.vn/cdn-cgi/image/width=700,height=700/https://gcs.tripi.vn/public-tripi/tripi-feed/img/482955ped/anh-mo-ta.png" alt="Future" />
          </div>

        </div>
      </div>
      <ShinyButton 
    onClick={() => setIsSliderOpen(true)}
/>

      {/* Component Modal */}
      <SliderModal 
        isOpen={isSliderOpen} 
        onClose={() => setIsSliderOpen(false)} 
        images={yourImages} // Đừng quên truyền danh sách ảnh vào đây
      />
    </section>
  );
}

export default Gallery;
