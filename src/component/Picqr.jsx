// PicQr.jsx
import React from 'react';
import "./Picqr.css"
// Giả sử các file CSS đã được import ở file cha (Footer.jsx)
// Nếu muốn tách hoàn toàn, huynh cần import './Footer.css' (hoặc .scss) vào đây
// Tuy nhiên, vì các class .picqr, .qr, .ftpicture đã nằm trong Footer.scss,
// nên ta chỉ cần giữ nguyên như sau:

export default function PicQr() {
  return (
    <div className="picqr">
      <img src="/qr-BQoWXRIO.png" className="qr" alt="Mã QR đến website Rikkei Education" />
      <img src="/imgfooter-B0-xMp1P.png" className="ftpicture" alt="Hình ảnh nhóm Rikkei Academy" />
    </div>
  );
}