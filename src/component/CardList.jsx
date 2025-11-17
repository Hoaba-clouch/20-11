// CardList.jsx

import React from 'react';
// Đảm bảo huynh đã import file CSS gốc hoặc các module CSS tương ứng
import './CardList.css'; 

// Dữ liệu cho các thẻ
const cardData = [
  {
    id: 1,
    title: "William Arthur Ward",
    copy: '"Người thầy trung bình chỉ biết nói. Người thầy giỏi biết giải thích. Người thầy xuất sắc biết minh họa. Người thầy vĩ đại biết truyền cảm hứng."',
    buttonText: "View Trips",
  },
  {
    id: 2,
    title: "Khổng Tử",
    copy: '"Nghề cao quý nhất trong tất cả các nghề là nghề dạy học"',
    buttonText: "View Trips",
  },
  {
    id: 3,
    title: "Nelson Mandela ",
    copy:'"Giáo dục là vũ khí mạnh nhất mà bạn có thể sử dụng để thay đổi thế giới."',
    buttonText: "Book Now",
  },
  {
    id: 4,
    title: "Jeff Atwood",
    copy: '"Hãy tạo ra những điều mà bạn muốn sử dụng, và làm việc với những người mà bạn ngưỡng mộ."',
    buttonText: "Book Now",
  },
];

const CardList = () => {
  return (
    
   <>
    <img className="image" src="/logo-rikkei2 2.png" alt="" />
     <h1 className="tieude">Các châm ngôn hay </h1>
    <main className="page-content">
      
      {/* Lặp qua mảng dữ liệu và render từng thẻ */}
      {cardData.map((card) => (
        // Chuyển <div> sang JSX. Lưu ý: class thành className và thêm key
        <div key={card.id} className="card">
          <div className="content">
          
            <h2 className="titlee">{card.title}</h2>
            <p className="copy">{card.copy}</p>
           
          </div>
        </div>
      ))}
    </main>
    </>
  );
};

export default CardList;

// Lưu ý: Nếu muốn, huynh có thể tách thêm thành component Card.jsx riêng biệt
// và import nó vào đây để code sạch hơn nữa.