// src/component/TributeCardGrid.jsx

import React from 'react';
import './TributeCardGrid.css'; // Import CSS riêng cho Card Grid

// Hàm helper format thời gian (từ Firestore Timestamp)
const formatTimestamp = (timestamp) => {
    if (!timestamp) return 'Vừa gửi';
    // Kiểm tra nếu là đối tượng Firestore Timestamp
    if (timestamp.toDate) {
        return timestamp.toDate().toLocaleDateString('vi-VN');
    }
    // Nếu là đối tượng Date hoặc String (dự phòng)
    try {
        return new Date(timestamp).toLocaleDateString('vi-VN');
    } catch (e) {
        console.error("Lỗi định dạng timestamp:", e);
        return 'Gần đây';
    }
};

// Component chính để hiển thị danh sách lời tri ân dưới dạng Card Grid
const TributeCardGrid = ({ tributes, loading, filterTeacher }) => {
    if (loading) {
        return <p>Đang tải lời tri ân...</p>;
    }

    if (tributes.length === 0) {
        return (
            <p>Chưa có lời tri ân nào được gửi cho {filterTeacher === 'ALL' ? 'mọi người' : filterTeacher}.</p>
        );
    }

    return (
        <div className="tribute-grid-container">
            {/* Sử dụng class card-grid để áp dụng layout lưới */}
            <div className="card-grid">
                
                {tributes.map(tribute => (
                    // Dùng div thay vì <a> vì đây là card hiển thị nội dung
                    <div className="cardd" key={tribute.id}> 
                        {/* Background tĩnh: huynh có thể thay bằng gradient hoặc ảnh */}
                       <div 
    className="card__background" 
    style={{ 
        // LƯU Ý: Phải là backgroundImage, và giá trị phải là chuỗi `url(...)`
        backgroundImage: `url('https://i.pinimg.com/736x/e1/b7/59/e1b759622f0961aad75ad23a9bb74019.jpg')` 
    }}
></div>
                        
                        <div className="card__content">
                            {/* Tên Giáo Viên được tri ân */}
                            <p className="card__category">🎉 Tri ân: {tribute.teacherName}</p>
                            
                            {/* Lời Tri Ân chính */}
                            <h3 className="card__heading message-text">"{tribute.message}"</h3>
                            
                            {/* Tên người gửi và thời gian */}
                            <div className="card__footer">
                                <p className="card__sender">— **{tribute.sender}**</p>
                                {tribute.timestamp && (
                                    <p className="card__timestamp">({formatTimestamp(tribute.timestamp)})</p>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TributeCardGrid;