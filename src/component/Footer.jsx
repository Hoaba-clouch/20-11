import { useGooeyBalls } from "../hooks/useGooeyBalls";
import "./Footer.css"
export default function Footer() {
  useGooeyBalls();
  return (
    <>
      <footer>
        <div className="gooey-animations"></div>
       

   

      <div className="footer-bottom">
       
      </div>
        <div className="flex">
            <div className="footer-main">
          <p className="footer-title"><strong> Người Lái Đò Thế Hệ Số</strong></p>
          <p className="footer-sub">
            Dự án landing page tri ân thầy cô nhân kỷ niệm 80 năm    <br />   Ngày Nhà giáo Việt Nam 20/11. <br />
            <p  className="desc"> <strong> Website </strong> <u>
https://rikkei.edu.vn</u>
</p>
          </p>
        </div>

        <div className="footer-info">
          <p><strong> Thực hiện:</strong> Nguyễn Bá Hoà </p>
          <p><strong>Lớp / Khóa:</strong> HCM-K24-CNTT1</p>
          <p><strong>Trường:</strong> Học Viện Công Nghệ Bưu Chính Viễn Thông</p>
          
        </div>
       
       
        </div>
      
      </footer>
       <div className="picqr">
          <img src="/qr-BQoWXRIO.png" className="qr" alt="" />
        <img src="/imgfooter-B0-xMp1P.png" className="ftpicture" alt="" />
        
        </div>
         
  <div className="chacuano">
   <span>© {new Date().getFullYear()} · Tri ân những người lái đò thầm lặng  - Rikkei Education - All rights reserved.</span>
  </div>
         
      {/* SVG filter */}
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="15" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 15 -7"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      {/* SVG wave */}
      <svg viewBox="0 0 1440 327" width="100vw">
        <defs>
          <clipPath
            id="wave"
            clipPathUnits="objectBoundingBox"
            transform="scale(0.00069444444, 0.00304878048)"
          >
            <path d="M504.452 27.7002C163.193 -42.9551 25.9595 38.071 0 87.4161V328H1440V27.7002C1270.34 57.14 845.711 98.3556 504.452 27.7002Z" />
          </clipPath>
        </defs>
      </svg>
    </>
  );
}
