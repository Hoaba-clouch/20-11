import React from 'react';

// Phong cách cơ bản cho Alert Modal
const alertStyles = {
  overlay: {
    position: 'fixed',
    top: '-70%',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.85)', // Nền tối và mờ
    display: 'flex',
    justifyContent: 'center',
    
    alignItems: 'center',
    zIndex: 1000,
  },
  modalContent: {
    backgroundColor: 'var(--color-bg-secondary)',
    padding: '30px 40px',
    borderRadius: '10px',
    maxWidth: '350px',
    width: '90%',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', // Đổ bóng nhẹ nhàng
    textAlign: 'center',
    // Thêm hiệu ứng xuất hiện
    animation: 'fadeIn 0.3s ease-out', 
  },
  title: {
    color: '#e76f51', // Màu xanh dương cho thông báo
    marginBottom: '10px',
    fontSize: '22px',
    fontWeight: '700',
  },
  message: {
    color: 'var(--color-text-secondary)',
    marginBottom: '20px',
    fontSize: '15px',
    lineHeight: '1.4',
  },
  closeButton: {
    padding: '10px 25px',
    borderRadius: '6px',
    fontSize: '16px',
    cursor: 'pointer',
    fontWeight: '600',
    border: 'none',
    backgroundColor: '#e76f51', // Màu xanh dương
    color: 'white',
    transition: 'background-color 0.2s',
  },
  // Đây chỉ là style nội tuyến, để có animation thực sự cần CSS file
  // Ví dụ CSS Keyframes:
  /*
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  */
};

const BeautifulAlert = ({
  isVisible,
  title = "Thông Báo Quan Trọng",
  message = "Hệ thống đã cập nhật dữ liệu thành công.",
  onClose,
}) => {
  if (!isVisible) return null;

  return (
    <div style={alertStyles.overlay} onClick={onClose}>
      {/* Ngăn chặn sự kiện click lan truyền */}
      <div style={alertStyles.modalContent} onClick={(e) => e.stopPropagation()}>
        <h3 style={alertStyles.title}>{title}</h3>
        <p style={alertStyles.message}>{message}</p>
        
        {/* Chỉ có một nút để đóng Alert */}
        <button 
          style={alertStyles.closeButton}
          onClick={onClose}
        >
          Đã Hiểu
        </button>
      </div>
    </div>
  );
};

export default BeautifulAlert;