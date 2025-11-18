import "./Gallery.scss";
import React, { useState } from 'react';
import ImageModal from './ImageModal';
import SliderModal from './SliderModal';
import ShinyButton from "./ShinyButton";
const yourImages = [
    { id: 1, url: "/z7234459973074_16d7fd52cf952fb113e77b2d13384239.jpg", alt: "Mô tả ảnh " },
    { id: 2, url: "/z7234459960175_1e407925a1be580bb044989508371ca3.jpg", alt: "Mô tả ảnh 2" },
    { id: 2, url: "/z7234459944624_feb633948c4d88fe8d059d1f0430988b.jpg", alt: "Mô tả ảnh 2" },
    { id: 2, url: "/z7234459956621_23ebfdaded05a72e498424211a0b576a.jpg", alt: "Mô tả ảnh 2" },
    { id: 2, url: "https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/555447922_1317582860156350_4326069764713786237_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=HwNSdkBZGkMQ7kNvwEyCW60&_nc_oc=AdkxFdKUSnnE71EZ4befV8m6DaIBKItOP9zqU6hKtW0-RIxodVSzfA62Xwraf-n9tcY&_nc_zt=23&_nc_ht=scontent.fsgn8-4.fna&_nc_gid=KZJo2EJOO_SS1ZW2tryKEg&oh=00_AfhwDdZBXJJZyeNj7fOye_sAi7duX3k9O13OsdocyrL0DQ&oe=69211B30", alt: "Mô tả ảnh 2" },
    { id: 2, url: "https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/554811480_122223506396257809_2464616965003949609_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=101&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=SunNmcMokZkQ7kNvwEOwfhF&_nc_oc=AdnDF4v0G7bpid8pa_GwPKCY3zAY4Vkpe1_inTD2duGesinhzJHEm7wxkjD1kKhnV3o&_nc_zt=23&_nc_ht=scontent.fsgn8-4.fna&_nc_gid=U9hpmbDCze_h4TCA-UGbuQ&oh=00_AfiO2jzRzmLTek-CXxgrHDKtKMR_ymSIA6R7A7R6lpjxBA&oe=69210F0E", alt: "Mô tả ảnh 2" },
  
    
];
function Gallery() {
const [isSliderOpen, setIsSliderOpen] = useState(false);
  return (
    <section className="gallery">
      <div className="container">
        <h2 className="gallery-title">Khoảnh khắc & Hành trình tri thức</h2>

        <div className="gallery-grid">

          <div className="gallery-item">
            <img src="/z7234459984140_8f66796437e0ddd3047c58b2c63e6e1a.jpg" alt="Teacher" />
          </div>

          <div className="gallery-item">
            <img src="/z7234459973074_16d7fd52cf952fb113e77b2d13384239.jpg" alt="Coding" />
          </div>

          <div className="gallery-item">
            <img src="/z7234459972102_a361e74d14a15e14e8b92a0182ac6dd0.jpg" alt="Books" />
          </div>

          <div className="gallery-item">
            <img src="/z7234459936991_6b1e3cf3fb648b02e705bfdd598af2d9.jpg" alt="Students" />
          </div>

          <div className="gallery-item wide">
            <img src="/z7234459917220_9cf8c2d47810533b9d99f194af9da41e.jpg" alt="Future" />
          </div>
  <div className="gallery-item wide">
            <img src="https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/553114478_2208220556312789_5385543777638781283_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=hGKQKXLC_NcQ7kNvwEMJWzU&_nc_oc=AdmFBZgrrnpmqfUL2tlOcmjhtriR7rAHUXlFsFqtqXo5PbGLxLokEX30NVbAm0LQbdg&_nc_zt=23&_nc_ht=scontent.fsgn8-4.fna&_nc_gid=TgwK51qiOKFSC_uTJRD3vA&oh=00_AfjY_qGp9g1xrEnhFpC09dXAKgmtIGJm_OvGxGz0EZtdMA&oe=692189BF" alt="Future" />
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
