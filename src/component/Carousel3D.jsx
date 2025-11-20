import React, { useState, useEffect, useRef, useCallback } from 'react';
import { CAROUSEL_ITEMS, SPIN_DUR } from './data';
import './Carousel3D.css'; // Giữ lại CSS cơ bản cho bố cục

const limit = CAROUSEL_ITEMS.length;

// Hàm tạo base64 pixel cho nền màu (GIỮ NGUYÊN)
const getBase64PixelByColor = (hex) => {
    const canvas = document.createElement('canvas');
    canvas.height = 1;
    canvas.width = 1;
    if (canvas.getContext) {
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = hex;
        ctx.fillRect(0, 0, 1, 1);
        return canvas.toDataURL();
    }
    return '';
};

const Carousel3D = () => {
    // ✅ DÙNG activeIndex để quản lý slide hiện tại
    const [activeIndex, setActiveIndex] = useState(0); 
    const [disabled, setDisabled] = useState(false);
    
    // Refs cho các phần tử DOM quan trọng (giữ lại để sync controls)
    const spinnerRef = useRef(null);
    const rightSpinnerRef = useRef(null);
    const controlsRef = useRef([]);

    // Logic Spin chính (Chỉ đơn giản là chuyển Index)
    const spin = useCallback((inc) => {
        if (disabled) return;

        setDisabled(true);
        
        setActiveIndex(prevIndex => {
            let newIndex = prevIndex + inc;

            if (newIndex >= limit) {
                newIndex = 0; // Quay lại đầu
            } else if (newIndex < 0) {
                newIndex = limit - 1; // Quay về cuối
            }
            return newIndex;
        });

        // Tắt disabled sau khi chuyển xong (Không cần delay lâu như 3D)
        setTimeout(() => {
             setDisabled(false);
        }, 600); // Delay ngắn cho cảm giác chuyển slide
        
    }, [disabled]);

    // Xử lý click Control (Điều khiển)
    const handleControlClick = useCallback((e, targetIndex) => {
        e.preventDefault();
        if (disabled) return;
        
        // Nếu click vào slide hiện tại, không làm gì
        if (targetIndex === activeIndex) return; 

        setDisabled(true);
        setActiveIndex(targetIndex);
        
        setTimeout(() => {
             setDisabled(false);
        }, 600);

    }, [disabled, activeIndex]);

    // Xử lý sự kiện bàn phím
    const handleKeyUp = useCallback((e) => {
        if (e.keyCode === 38) { // Mũi tên lên
            spin(-1); // Lùi
        } else if (e.keyCode === 40) { // Mũi tên xuống
            spin(1); // Tiến
        }
    }, [spin]);

    // --- useEffects ---

    // 1. useEffect: Initialization (Chạy 1 lần) - Gán màu nền
    useEffect(() => {
        CAROUSEL_ITEMS.forEach((item, i) => {
            const faceLeft = spinnerRef.current?.querySelector(`.spinner__face[data-index="${i}"]`);
            const faceRight = rightSpinnerRef.current?.querySelector(`.spinner__face[data-index="${i}"]`);
            
            const base64Pixel = getBase64PixelByColor(item.bgColor);

            if (faceLeft) faceLeft.style.backgroundImage = `url(${base64Pixel})`;
            if (faceRight) faceRight.style.backgroundImage = `url(${base64Pixel})`;
        });
    }, []);

    // 2. useEffect: Listeners (Gắn và gỡ sự kiện bàn phím)
    useEffect(() => {
        document.addEventListener('keyup', handleKeyUp);
        return () => {
            document.removeEventListener('keyup', handleKeyUp);
        };
    }, [handleKeyUp]);

    // 3. useEffect: Sync Active Control (Đồng bộ nút điều khiển)
    useEffect(() => {
        controlsRef.current.forEach((el, i) => {
            if (el) {
                el.classList.toggle('active', i === activeIndex);
            }
        });
    }, [activeIndex]);


    // Hàm render nội dung cho spinner face
    const renderContent = (item) => (
        // Chú ý: Đổi tên class 'contenttt' nếu nó là nguyên nhân gây lỗi CSS cũ
        <div className="contenttt" data-type={item.type}> 
            <div className="content__left">
                <h1>{item.title}<br /><span>{item.subtitle}</span></h1>
            </div>
            <div className="content__right">
                <div className="content__main">
                    <p>{item.quote}</p>
                    <p>– {item.author}</p>
                </div>
                <h3 className="content__index">{item.index}</h3>
            </div>
        </div>
    );
    
    // Hàm render Spinner Face
    const renderSpinnerFace = (item, index) => {
        // ✅ Index của item trong mảng cố định (0, 1, 2, 3)
        // ✅ isActive chỉ là kiểm tra xem nó có phải là slide active hiện tại không
        const isActive = index === activeIndex; 
        
        // Dùng class 'js-active' để hiển thị nội dung, và dùng data-index cố định
        const className = `spinner__face ${isActive ? 'js-active' : ''}`;
        
        return (
            <div 
                key={item.index} // Dùng key cố định
                className={className} 
                data-index={index} 
                data-bg={item.bgColor}
                // Thêm style display: none/block để ẩn các slide không active (nếu CSS cũ chưa xử lý)
               
            >
                {renderContent(item)}
            </div>
        );
    };
    
    return (
        <div className="carousel">
            {/* Control */}
            <div className="carousel__control">
                {CAROUSEL_ITEMS.map((item, index) => (
                    <a 
                        key={item.index} // ✅ Dùng item.index làm key cố định
                        href="#" 
                        data-index={index}
                        onClick={(e) => handleControlClick(e, index)}
                        ref={el => controlsRef.current[index] = el}
                    ></a>
                ))}
            </div>

            {/* Stage */}
            <div 
                // Không cần spinClass nữa
                className="carousel__stage"
            >
                {/* Spinner Left: Chỉ cần lặp qua CAROUSEL_ITEMS cố định */}
                <div ref={spinnerRef} className="spinner spinner--left">
                    {CAROUSEL_ITEMS.map(renderSpinnerFace)}
                </div>
                
                {/* Spinner Right (Duplicated Spinner): Chỉ cần lặp qua CAROUSEL_ITEMS cố định */}
                <div ref={rightSpinnerRef} className="spinner spinner--right">
                    {CAROUSEL_ITEMS.map(renderSpinnerFace)}
                </div>
            </div>
        </div>
    );
};

export default Carousel3D;