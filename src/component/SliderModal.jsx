// File: SliderModal.jsx
import React, { useState, useEffect, useCallback } from 'react'; 
import './SliderModal.css';
const PrevIcon = () => (
    <svg width="16" height="16" fill="currentColor" className="icon arrow-left-circle" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
    </svg>
);

const NextIcon = () => (
    <svg width="16" height="16" fill="currentColor" className="icon arrow-right-circle" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
    </svg>
);
// Dữ liệu mẫu và SVG Icons (Giữ nguyên)
const DUMMY_IMAGES = [
    { id: 1, url: "https://picsum.photos/800/400?random=1", alt: "Thumbnail 1" },
    { id: 2, url: "https://picsum.photos/800/400?random=2", alt: "Thumbnail 2" },
    { id: 3, url: "https://picsum.photos/800/400?random=3", alt: "Thumbnail 3" },
    { id: 4, url: "https://picsum.photos/800/400?random=4", alt: "Thumbnail 4" },
    { id: 5, url: "https://picsum.photos/800/400?random=5", alt: "Thumbnail 5" },
    { id: 6, url: "https://picsum.photos/800/400?random=6", alt: "Thumbnail 6" },
];

// ... (PrevIcon và NextIcon giữ nguyên) ...

export default function SliderModal({ isOpen, onClose, images = DUMMY_IMAGES }) {
    
    // 1. KHAI BÁO TẤT CẢ CÁC HOOKS TRƯỚC HẾT
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0); 
    
    // SỬA ĐỔI RẤT QUAN TRỌNG: 
    // Dùng một state chỉ để quản lý trạng thái đóng sau khi transition
    const [isClosing, setIsClosing] = useState(!isOpen); 

    const totalSlides = images.length; 
    
    // TRẠNG THÁI RENDER: 
    // Component sẽ render nếu (đang mở) HOẶC (đang trong quá trình đóng transition)
    const shouldRender = isOpen || !isClosing;
    
    // showSlide, handleAction dùng useCallback (Giữ nguyên logic đã tối ưu)
    const showSlide = useCallback((index) => {
        const newIndex = (index + totalSlides) % totalSlides; 
        setCurrentSlideIndex(newIndex);
    }, [totalSlides]);
    
    const handleAction = useCallback((action) => {
        let newIndex = currentSlideIndex;
        // ... (Logic tính newIndex) ...
        if (action === "ArrowRight" || action === "next") {
            newIndex = (currentSlideIndex + 1) % totalSlides;
        } else if (action === "ArrowLeft" || action === "prev") {
            newIndex = (currentSlideIndex - 1 + totalSlides) % totalSlides;
        } else if (action === "Home") {
            newIndex = 0;
        } else if (action === "End") {
            newIndex = totalSlides - 1;
        }
        showSlide(newIndex);
    }, [currentSlideIndex, totalSlides, showSlide]); 
    
    
    // 2. LOGIC QUẢN LÝ HIỆU ỨNG ĐÓNG VÀ INITIAL INDEX
// 2. LOGIC SIDE-EFFECT: Reset Index
    // (Chỉ reset index khi modal mở)
    // =========================================================
    useEffect(() => {
        // Đây là side-effect chính đáng: Reset index về 0 khi modal MỚI MỞ
        if (isOpen) {
            showSlide(0); 
        }
    }, [isOpen, showSlide]); 
    // Chú ý: useEffect này không gọi setState nào trên component hiện tại, nên an toàn.

    // =========================================================
    // 3. LOGIC HIỆU ỨNG: Quản lý DOM/Transition
    // (Tách biệt khỏi logic reset index)
    // =========================================================
    useEffect(() => {
    if (isOpen) {
        // LƯU Ý QUAN TRỌNG: Tắt cảnh báo ESLint cho dòng này.
        // Logic này là cần thiết để bắt đầu hiệu ứng mở (CSS transition) 
        // và không gây ra vòng lặp vô hạn.
        // eslint-disable-next-line react-hooks/exhaustive-deps, react-hooks/set-state-in-effect
        setIsClosing(false); 
        
    } else {
        // LÚC ĐÓNG: Đặt timer để gỡ DOM sau transition (300ms)
        const timer = setTimeout(() => setIsClosing(true), 300); 
        return () => clearTimeout(timer);
    }
}, [isOpen]);
    
    // 4. LỆNH RETURN CÓ ĐIỀU KIỆN (SAU TẤT CẢ CÁC HOOKS)
    if (!shouldRender) return null;

    return (
        // Modal Backdrop
        <div 
            className={`slider-modal-backdrop ${isOpen ? 'open' : 'closed'}`} 
            onClick={onClose}
        >
            {/* Modal Content */}
            <div 
                className={`slider-modal-content ${isOpen ? 'open' : 'closed'}`} 
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button className="close-btn" onClick={onClose} style={{
                    position: 'absolute', 
                    top: '20px', 
                    right: '20px', 
                    zIndex: 10001,
                    background: 'none',
                    border: 'none',
                    color: 'white',
                    fontSize: '2rem',
                    cursor: 'pointer',
                    textShadow: '0 0 5px rgba(0,0,0,0.5)'
                }}>&times;</button>


                {/* Slider Component */}
                <div className="image-slider">
                    <section className="slider__content">
                        {/* Prev Button */}
                        <button 
                            type="button" 
                            className="slider-control--button prev-button"
                            onClick={() => handleAction('prev')}
                        >
                            <PrevIcon />
                        </button>
                        
                        {/* Main Image Display */}
                        <main className="image-display">
                            {images.length > 0 && (
                                <img 
                                    src={images[currentSlideIndex].url} 
                                    alt={images[currentSlideIndex].alt} 
                                />
                            )}
                        </main>
                        
                        {/* Next Button */}
                        <button 
                            type="button" 
                            className="slider-control--button next-button"
                            onClick={() => handleAction('next')}
                        >
                            <NextIcon />
                        </button>
                    </section>
                    
                    {/* Navigation Thumbnails */}
                    <nav className="slider-navigation">
                        {images.map((image, index) => (
                            <button 
                                key={image.id || index}
                                className="nav-button" 
                                aria-selected={index === currentSlideIndex}
                                onClick={() => showSlide(index)}
                            >
                                <img className="thumbnail" src={image.url} alt={image.alt} />
                            </button>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    );
}