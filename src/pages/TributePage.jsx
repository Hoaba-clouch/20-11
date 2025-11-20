// src/pages/TributePage.jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import React, { useState,  useEffect , useCallback } from 'react';
import { db } from '../component/firebase'; // Import Firestore đã cấu hình
import { collection, addDoc, serverTimestamp, getDocs, query } from 'firebase/firestore'; 
import './TributePage.css'; // Import CSS riêng cho trang này
import ShinyButton from '../component/ShinyButton';
import TributeCardGrid from '../component/TributeCardGrid';
import BeautifulAlert from '../component/BeautifulAlert';

export default function TributePage() {
    const [isAlertOpen, setIsAlertOpen] = useState(false);
const [alertContent, setAlertContent] = useState({ title: '', message: '' });

  const handleOpenAlert = () => {
    setIsAlertOpen(true);
  }
  const handleCloseAlert = () => {
    setIsAlertOpen(false);
  }
    const [tributeData, setTributeData] = useState({
        teacherName: '',
        tributeType: 'knowledge', // Giá trị mặc định
        message: '',
        sender: '',
    });
const [tributes, setTributes] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const [filterTeacher, setFilterTeacher] = useState('ALL');
    const [searchTerm, setSearchTerm] = useState('');
    const handleChange = (e) => {
        const { name, value } = e.target;
        setTributeData(prev => ({ ...prev, [name]: value }));
    };

    // Hàm xử lý gửi Form
// src/pages/TributePage.jsx (Chỉ phần hàm handleSubmit)

    // Hàm xử lý gửi Form
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!tributeData.teacherName || !tributeData.message || !tributeData.sender) {
            // ✅ DÙNG ĐÚNG CÁCH: Lưu nội dung lỗi vào state và MỞ alert
            setAlertContent({
                title: "Lỗi thiếu thông tin",
                message: "Vui lòng điền đầy đủ tất cả các trường bắt buộc trước khi gửi lời tri ân."
            });
            handleOpenAlert(); // Gọi hàm mở alert
            return;
        }

        try {
            await addDoc(collection(db, "tributes"), {
                ...tributeData,
                timestamp: serverTimestamp()
            });

            // ✅ DÙNG ĐÚNG CÁCH: Lưu nội dung thành công và MỞ alert
            setAlertContent({
                title: "🎉 Chúc Mừng Thành Công!",
                message: "Dữ liệu của bạn đã được gửi thành công. Cảm ơn bạn đã gửi lời tri ân!"
            });
            handleOpenAlert(); // Gọi hàm mở alert
            
            setTributeData({ teacherName: '', tributeType: 'knowledge', message: '', sender: '' }); // Reset Form
            await fetchTributes();
        } catch (e) {
            console.error("Lỗi khi thêm tài liệu: ", e);
            alert("Có lỗi xảy ra, vui lòng thử lại.");
        }
    };
const fetchTributes = useCallback(async () => {
    // LOG 1: Bắt đầu hàm
    console.log("LOG 1: Bắt đầu fetchTributes...");
    setLoading(true);
    
    try {
        // Lấy tất cả tài liệu từ collection 'tributes'
        const q = query(collection(db, "tributes"));
        
        // LOG 2: Trước khi gọi getDocs (bước kết nối)
        console.log("LOG 2: Đang chờ kết quả từ Firebase...");
        
        const querySnapshot = await getDocs(q);
        
        // LOG 3: Sau khi có kết quả
        console.log("LOG 3: Số lượng documents nhận được:", querySnapshot.docs.length);
        
        const tributesList = [];
        querySnapshot.forEach((doc) => {
            tributesList.push({
                id: doc.id,
                ...doc.data()
            });
        });
        
        setTributes(tributesList);
        
        // LOG 4: Sau khi cập nhật State
        console.log("LOG 4: Đã gọi setTributes. Tổng số item:", tributesList.length);

    } catch (error) {
        // LOG 5: Nếu có lỗi xảy ra
        console.error("LOG 5: LỖI KẾT NỐI/ĐỌC DỮ LIỆU:", error);
    } finally {
        setLoading(false);
        // LOG 6: Kết thúc
        console.log("LOG 6: Kết thúc fetchTributes.");
    }
}, []); 

useEffect(() => {
    fetchTributes();
}, []);
    const uniqueTeachers = ['ALL', ...new Set(tributes.map(t => t.teacherName))];
    
    // 2. Logic lọc dữ liệu dựa trên trạng thái filterTeacher
    const filteredTributes = tributes.filter(tribute => {
        const matchesTeacher = filterTeacher === 'ALL' || tribute.teacherName === filterTeacher;

    // 2. Logic TÌM KIẾM THEO CHUỖI TÌM KIẾM
    const matchesSearch = searchTerm.trim() === '' || 
        tribute.message.toLowerCase().includes(searchTerm.toLowerCase().trim()) ||
        tribute.sender.toLowerCase().includes(searchTerm.toLowerCase().trim());
    
    // TRẢ VỀ true NẾU PHÙ HỢP VỚI CẢ HAI TIÊU CHÍ
    return matchesTeacher && matchesSearch;
    });
    
    return (
        <div className="tribute-container">
            <h2 className='h2'>Gửi Lời Tri Ân Thầy Cô</h2>
            <form onSubmit={handleSubmit} className="tribute-form">
                
                {/* 1. Tên Giáo Viên */}
                <input 
                    type="text" 
                    name="teacherName"
                    value={tributeData.teacherName}
                    onChange={handleChange}
                    placeholder="Tên Thầy/Cô được tri ân (ví dụ: Thầy A, Cô B)"
                />

                {/* 2. Loại Tri Ân */}
                <select name="tributeType" value={tributeData.tributeType} onChange={handleChange}>
                    <option  value="knowledge">Cảm ơn về kiến thức</option>
                    <option value="life_skill">Cảm ơn về kinh nghiệm sống</option>
                    <option value="wishes">Lời chúc ngày Nhà giáo</option>
                    <option value="other">Khác</option>
                </select>

                {/* 3. Lời Tri Ân */}
                <textarea 
                    name="message"
                    value={tributeData.message}
                    onChange={handleChange}
                    placeholder="Viết lời tri ân của bạn tại đây..."
                    rows="5"
                />

                {/* 4. Tên Người Gửi (Guestbook style) */}
                <input 
                    type="text" 
                    name="sender"
                    value={tributeData.sender}
                    onChange={handleChange}
                    placeholder="Tên và Lớp/Khóa của bạn (ví dụ: Bá Hoà - K24)"
                />
                
                <ShinyButton  className={'butonn'} type="submit" >Gửi Lời Chúc Tri Ân  </ShinyButton>
            </form>

            {/* Mục Bộ Lọc và Danh Sách sẽ được thêm ở Bước 3 */}
            <div className="tribute-list-section">
                {/* ... */}
            </div>
            <div className="tribute-list-section">
                <h3>Danh Sách Lời Tri Ân Gần Đây ({filteredTributes.length} Lời)</h3>
<div className='search-bar'> 
    
    
    <FontAwesomeIcon icon={faSearch} className="search-icon" />
      <input 
                    type="text"
                    placeholder="Tìm kiếm theo nội dung tri ân hoặc tên người gửi..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} // Cập nhật state tìm kiếm
                    className="search-input" // Thêm class để dễ dàng styling
                />
    </div>
              
                {/* 3. VỊ TRÍ ĐẶT CÁC NÚT LỌC */}
                <div className="filter-buttons">
                    {uniqueTeachers.map(teacher => (
                        <button 
                            key={teacher}
                            onClick={() => setFilterTeacher(teacher)} // Cập nhật state filter
                            // Thêm class 'active' để tô màu nút đang được chọn
                            className={filterTeacher === teacher ? 'active-filter-button' : ''}
                        >
                            {teacher}
                        </button>
                    ))}
                </div>

                {/* 4. VỊ TRÍ HIỂN THỊ DANH SÁCH ĐÃ LỌC */}
                {loading && <p>Đang tải lời tri ân...</p>}

                {!loading && filteredTributes.length === 0 && (
                    <p>Chưa có lời tri ân nào được gửi cho {filterTeacher === 'ALL' ? 'mọi người' : filterTeacher}.</p>
                )}
                
              <TributeCardGrid 
                tributes={filteredTributes} 
                loading={loading}
                filterTeacher={filterTeacher}
            />
            </div>
            <BeautifulAlert
                isVisible={isAlertOpen}
                title={alertContent.title}
                message={alertContent.message}
                onClose={handleCloseAlert} 
            />
        </div>
        
    );
}