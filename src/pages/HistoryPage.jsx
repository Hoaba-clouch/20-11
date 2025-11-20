// src/pages/HistoryPage.jsx

import React from 'react';
import './HistoryPage.css'; // File CSS chúng ta sẽ tạo ở Bước 2
import Carousel3D from '../component/Carousel3D';

// Dữ liệu mẫu đã có thêm trường position (Vị trí)
// src/pages/HistoryPage.jsx (Mảng historyData mới)

const historyData = [
    { 
        year: 'Thế kỷ 11 - 19', 
        title: 'Giáo Dục Phong Kiến & Nền Tảng Văn Hiến', 
        description: 'Thành lập Quốc Tử Giám (1076). Hệ thống giáo dục Nho giáo đóng vai trò chủ đạo. Người thầy (Thầy đồ) là biểu tượng của tri thức, giữ vai trò khai sáng và truyền bá đạo đức Khổng Tử.', 
       
        tags: ['Nho giáo', 'Khoa cử', 'Thầy đồ']
    },
    { 
        year: '1858 - 1945', 
        title: 'Thời Kỳ Thuộc Địa & Chuyển Đổi Chữ Viết', 
        description: 'Chuyển đổi từ Hán Nôm sang chữ Quốc ngữ. Xuất hiện hệ thống trường học mới theo mô hình Pháp. Người thầy là cầu nối giữa tri thức phương Tây và văn hóa truyền thống.', 
        
        tags: ['Quốc ngữ', 'Văn hóa Pháp', 'Giáo dục hiện đại']
    },
    { 
        year: '1945 - 1975', 
        title: 'Giáo Dục Kháng Chiến & Bình Dân Học Vụ', 
        description: 'Chiến dịch xóa mù chữ (Bình dân học vụ) là ưu tiên hàng đầu. Hàng triệu người thầy tình nguyện tham gia, mang ánh sáng chữ viết đến mọi miền đất nước trong bối cảnh chiến tranh khó khăn.', 
       
        tags: ['Cách mạng', 'Xóa mù chữ', 'Giáo dục tự lực']
    },
    { 
        year: '1986 - Hiện tại', 
        title: 'Thời Kỳ Đổi Mới & Hội Nhập Quốc Tế', 
        description: 'Tập trung vào phát triển chất lượng, phổ cập giáo dục phổ thông. Người thầy đối mặt với thách thức công nghệ, đổi mới phương pháp giảng dạy và hội nhập quốc tế.', 
       
        tags: ['Đổi mới', 'Công nghệ', 'Chất lượng cao']
    }
];

// ... (Phần render JSX giữ nguyên) ...

export default function HistoryPage() {
    return (
        <>
         <h1 className="page-title">Lịch Sử Ngành Giáo Dục Việt Nam</h1>
        <Carousel3D />
        <div className="history-page-container">
            <h1 className="page-title">Tổng Quan Dòng Thời Gian</h1>
            
            {/* Container chính của Dòng Thời Gian */}
            <div className="timeline">
                
                {historyData.map((event, index) => (
                    // timeline-item: Gói sự kiện, xác định vị trí trái/phải
                    <div key={index} className={`timeline-item ${event.position}`}>
                        
                        {/* 1. Vị trí chứa Card nội dung */}
                        <div className="timeline-content-wrapper">
                            <div className="timeline-card">
                                <div className="year">{event.year}</div>
                                <h2>{event.title}</h2>
                                {event.imageURL && (
                                    <div className="image-wrapper">
                                        <img src={event.imageURL} alt={event.title} className="event-image" />
                                    </div>
                                )}
                                <p>{event.description}</p>
                                <div className="tags">
                                    {event.tags && event.tags.map(tag => 
                                        <span key={tag} className="tag">{tag}</span>
                                    )}
                                </div>
                            </div>
                        </div>
                        
                        {/* 2. Chấm tròn mốc thời gian (Sẽ được căn giữa bằng CSS) */}
                        <div className="timeline-dot"></div> 
                        
                    </div>
                ))}
            </div>
        </div>
        </>
    );
}