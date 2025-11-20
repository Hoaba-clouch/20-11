import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './FrostedGlassGooeyNav.css';

// Hàm helper để tạo hiệu ứng hạt (particles)
const makeParticles = (effectEl, pCount = 15, colors = [1, 2, 3, 1, 2, 3, 1, 4], animationTime = 600, timeVariance = 300) => {
    const noise = (n = 1) => n / 2 - Math.random() * n;
    const getXY = (distance, pointIndex, totalPoints) => {
        const x = distance * Math.cos(((360 + noise(8)) / totalPoints * pointIndex) * Math.PI / 180);
        const y = distance * Math.sin(((360 + noise(8)) / totalPoints * pointIndex) * Math.PI / 180);
        return [x, y];
    };

    const createParticle = (i, t, d, r = 100) => {
        let rotate = noise(r / 10);
        let minDistance = d[0];
        let maxDistance = d[1];
        return {
            start: getXY(minDistance, pCount - i, pCount),
            end: getXY(maxDistance + noise(7), pCount - i, pCount),
            time: t,
            scale: 1 + noise(0.2),
            color: colors[Math.floor(Math.random() * colors.length)],
            rotate: rotate > 0 ? (rotate + r / 20) * 10 : (rotate - r / 20) * 10
        };
    };

    const d = [90, 10];
    const r = 100;
    const bubbleTime = animationTime * 2 + timeVariance;

    effectEl.style.setProperty('--time', `${bubbleTime}ms`);

    for (let i = 0; i < pCount; i++) {
        const t = animationTime * 2 + noise(timeVariance * 2);
        const p = createParticle(i, t, d, r);
        
        // Tạo DOM element
        const $particle = document.createElement('span');
        const $point = document.createElement('span');
        
        $particle.classList.add('particle');
        $particle.style.cssText = `
            --start-x: ${p.start[0]}px;
            --start-y: ${p.start[1]}px;
            --end-x: ${p.end[0]}px;
            --end-y: ${p.end[1]}px;
            --time: ${p.time}ms;
            --scale: ${p.scale};
            --color: var(--color-${p.color}, white);
            --rotate: ${p.rotate}deg;
        `;
        $point.classList.add('point');
        $particle.append($point);
        
        effectEl.classList.remove('active');
        
        // Sử dụng setTimeout để đảm bảo requestAnimationFrame hoạt động đúng
        setTimeout(() => {
            effectEl.append($particle);
            requestAnimationFrame(() => {
                effectEl.classList.add('active');
            });
            setTimeout(() => {
                try {
                    effectEl.removeChild($particle);
                } catch (e) {
                    console.error(e)
                }
            }, t);
        }, 30);
    }
};


const NavItems = [
    // ✅ PHẢI LÀ URL PATH, KHÔNG PHẢI FILE PATH
    { name: 'TRANG CHỦ', path: '/' }, 
    { name: 'LỊCH SỬ ', path: '/history' },
    { name: 'LỜI TRI ÂN', path: '/tribute' },
];


const FrostedGlassGooeyNav = () => {
    
    const navigate = useNavigate()
    const navRef = useRef(null);
    const effectFilterRef = useRef(null);
    const effectTextRef = useRef(null);
    const listItemRefs = useRef([]);
const location = useLocation();
const initialIndex = NavItems.findIndex(item => item.path === location.pathname);
const [activeIndex, setActiveIndex] = useState(initialIndex >= 0 ? initialIndex : 0);
    // 1. Cập nhật vị trí và nội dung của hiệu ứng
    const updateEffectPosition = useCallback((element) => {
        if (!element || !effectFilterRef.current || !effectTextRef.current) return;

        const pos = element.getBoundingClientRect();
        const styles = {
            left: `${pos.x}px`,
            top: `${pos.y}px`,
            width: `${pos.width}px`,
            height: `${pos.height}px`
        };

        Object.assign(effectFilterRef.current.style, styles);
        Object.assign(effectTextRef.current.style, styles);
        effectTextRef.current.innerText = element.innerText;
    }, []);

    // 2. Xử lý click/active
    const handleItemClick = useCallback((index) => {
        const $el = listItemRefs.current[index];
        if (!$el || index === activeIndex) return;

        // Cập nhật vị trí ngay lập tức
        updateEffectPosition($el);

        // Xóa các hạt cũ
        effectFilterRef.current.querySelectorAll('.particle').forEach(($p) => {
            effectFilterRef.current.removeChild($p);
        });

        // Đặt lại và kích hoạt hiệu ứng text
        effectTextRef.current.classList.remove('active');
        setTimeout(() => {
            effectTextRef.current.classList.add('active');
            
        }, 100);

        // Tạo hạt mới
        makeParticles(effectFilterRef.current);
        
        // Cập nhật trạng thái active
        const item = NavItems[index];
    if (item && item.path) {
        // Chạy navigation sau một khoảng trễ để hiệu ứng có thời gian hiện ra
        setTimeout(() => {
            navigate(item.path); 
        }, 500); 
    }
        setActiveIndex(index);
    }, [activeIndex, updateEffectPosition , navigate]);

    // 3. Effect để chạy lần đầu tiên và xử lý sự kiện
    useEffect(() => {
    // Chỉ chạy một lần duy nhất sau khi component được mount
    const initialEl = listItemRefs.current[activeIndex]; // ✅ Dùng activeIndex
        
        if (initialEl) {
            updateEffectPosition(initialEl); 
            effectTextRef.current.classList.add('active'); // Kích hoạt hiệu ứng text ngay

        // Chạy animation hạt sau 200ms (nếu cần)
        setTimeout(() => {
             // Đảm bảo chỉ tạo hạt khi ref đã sẵn sàng
             if (effectFilterRef.current) {
                makeParticles(effectFilterRef.current);
             }
        }, 200); 
    }

    // ... (Giữ nguyên ResizeObserver và cleanup)
}, [activeIndex, updateEffectPosition]);
useEffect(() => {
    const newIndex = NavItems.findIndex(item => item.path === location.pathname);

    // Chỉ chạy khi URL thực sự thay đổi và khớp với một item
    if (newIndex !== activeIndex && newIndex >= 0) {
        
        // 1. Cập nhật Index (Sử dụng setTimeout để tránh lỗi cascade render trước đó)
        // Dùng setTimeout nhỏ để tách set state khỏi việc render
        setTimeout(() => {
            setActiveIndex(newIndex);
        }, 0); 
        
        // 2. Kích hoạt hiệu ứng ngay lập tức
        const $el = listItemRefs.current[newIndex];
        if ($el) {
            updateEffectPosition($el); // Cập nhật vị trí và kích thước
            effectTextRef.current.classList.remove('active');
            effectTextRef.current.classList.add('active'); // Kích hoạt hiệu ứng text
            
            // Tùy chọn: chạy hiệu ứng hạt
            effectFilterRef.current.querySelectorAll('.particle').forEach(($p) => {
                effectFilterRef.current.removeChild($p);
            });
            makeParticles(effectFilterRef.current);
        }
    }
}, [location.pathname, activeIndex, updateEffectPosition]);
    // 4. Keyboard Navigation
    const handleKeyDown = useCallback((e, index) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleItemClick(index);
        }
    }, [handleItemClick]);

    return (
        <main id="app">
         
            <nav ref={navRef}>
                <ul>
                    {NavItems.map((item, index) => (
                        <li 
                            key={item.name}
                            ref={el => listItemRefs.current[index] = el}
                            className={index === activeIndex ? 'active' : ''}
                            onClick={() => handleItemClick(index)}
                        >
                  <a 
                            // ❌ KHÔNG DÙNG href={item.href} hoặc to={item.path}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                        >
                            {item.name}
                        </a>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Effect Elements */}
            <span ref={effectFilterRef} className="effect filter"></span>
            <span ref={effectTextRef} className="effect text">
                {NavItems[activeIndex].name}
            </span>
            
            {/* Social Icons (giữ nguyên từ index.html) */}
       
        </main>
    );
};

export default FrostedGlassGooeyNav;