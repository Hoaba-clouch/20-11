// Thay thế toàn bộ mảng CAROUSEL_ITEMS hiện tại bằng dữ liệu này

export const CAROUSEL_ITEMS = [
    {
        // GIAI ĐOẠN 1: THỜI KỲ PHONG KIẾN
        title: "GIÁO DỤC PHONG KIẾN",
        subtitle: "NỀN TẢNG VĂN HIẾN",
        type: "phongkien", // Dùng để định danh trong CSS
        bgColor: "#2c3e50", // Màu đại diện: Tĩnh lặng, truyền thống
        quote: `Sự kiện Thành lập Quốc Tử Giám (1076) dưới triều Lý là dấu mốc khẳng định vai trò tối thượng của giáo dục trong việc xây dựng và củng cố nhà nước quân chủ trung ương tập quyền. Quốc Tử Giám, ban đầu là nơi dành riêng cho con em vua và quan lại cao cấp, sau đó mở rộng cửa cho những học trò xuất sắc, trở thành trung tâm đào tạo quan lại cấp cao nhất của quốc gia Đại Việt. Hệ thống giáo dục này lấy Nho giáo làm nền tảng tư tưởng và đạo đức chủ đạo, với mục tiêu cao nhất là đào tạo ra đội ngũ trí thức "Trung quân ái quốc", am hiểu Tứ Thư, Ngũ Kinh và lễ nghĩa. Người theo học phải trải qua các kỳ Khoa cử cam go để đạt được danh vọng và quyền lực. `,
        author: "Thầy Đồ (Thế kỷ 11 - 19)",
        index: "01"
    },
    {
        // GIAI ĐOẠN 2: THỜI KỲ CHUYỂN ĐỔI (THUỘC ĐỊA)
        title: "THỜI KỲ CHUYỂN ĐỔI",
        subtitle: "QUỐC NGỮ HÌNH THÀNH",
        type: "thuocdia",
        bgColor: "#34495e", // Màu đại diện: Chuyển tiếp, tối
        quote: "Giai đoạn 1858–1945 là thời kỳ nền giáo dục Việt Nam có sự biến đổi căn bản dưới ảnh hưởng của Pháp. Thay đổi lớn nhất là quá trình chuyển từ chữ Hán Nôm sang chữ Quốc ngữ (hệ chữ La-tinh hóa), một công cụ sau này đã tạo điều kiện cho việc phổ cập tri thức dễ dàng hơn. Cùng lúc đó, hệ thống trường học mới theo mô hình Pháp được thiết lập, đưa các môn học khoa học phương Tây vào giảng dạy, khác biệt hoàn toàn so với Nho giáo truyền thống. Trong bối cảnh này, người thầy đóng vai trò là cầu nối đa văn hóa. Họ vừa phải truyền đạt tri thức và tư tưởng phương Tây mới mẻ, vừa cố gắng gìn giữ văn hóa truyền thống và tinh thần dân tộc. Đội ngũ giáo viên này chính là những người đã đặt nền móng quan trọng đầu tiên cho nền giáo dục hiện đại của Việt Nam.",
        author: "Thầy Tây (1858 - 1945)",
        index: "02"
    },
    {
        // GIAI ĐOẠN 3: GIÁO DỤC CÁCH MẠNG
        title: "KHÁNG CHIẾN & XÓA MÙ CHỮ",
        subtitle: "BÌNH DÂN HỌC VỤ",
        type: "khangchien",
        bgColor: "#c0392b", // Màu đại diện: Nhiệt huyết, cách mạng
        quote: `Giai đoạn 1945 – 1975, Chiến dịch Bình dân học vụ nhằm xóa mù chữ đã trở thành nhiệm vụ quốc gia hàng đầu trong bối cảnh chiến tranh và tỷ lệ thất học cao. Hàng triệu người đã tình nguyện trở thành "Chiến sĩ Văn hóa", mang ánh sáng chữ viết đến khắp mọi miền đất nước.Người thầy lúc này không chỉ dạy chữ mà còn truyền bá tinh thần cách mạng và ý chí tự lực, thể hiện quan điểm "Dạy học là phục vụ đất nước". Sự hy sinh và cống hiến này đã giúp hàng triệu người thoát khỏi cảnh mù chữ, tạo nên một hậu phương vững chắc về tri thức cho công cuộc kháng chiến gian khổ.`,
        author: "Chiến sĩ Văn hóa (1945 - 1975)",
        index: "03"
    },
    {
        // GIAI ĐOẠN 4: ĐỔI MỚI VÀ HỘI NHẬP
        title: "ĐỔI MỚI & HỘI NHẬP",
        subtitle: "CÔNG NGHỆ VÀ TOÀN CẦU",
        type: "hoinhap",
        bgColor: "#27ae60", // Màu đại diện: Hiện đại, phát triển
        quote: "Từ năm 1986, giáo dục Việt Nam tập trung vào phát triển chất lượng và phổ cập giáo dục phổ thông, với mục tiêu đào tạo nguồn nhân lực chất lượng cao.Người thầy đối mặt với ba thách thức lớn:Công nghệ (4.0): Yêu cầu làm chủ công nghệ và tích hợp phương pháp giảng dạy kỹ thuật số.Đổi mới Phương pháp: Chuyển sang phát huy năng lực và tư duy phản biện của người học.Hội nhập Quốc tế: Áp dụng các chuẩn mực giáo dục toàn cầu.Vai trò của người thầy chuyển từ người truyền đạt kiến thức thành người kiến tạo và người hướng dẫn để chuẩn bị cho học sinh trở thành công dân toàn cầu.",
        author: "Người Thầy Hiện Đại (1986 - Nay)",
        index: "04"
    },
];

export const SPIN_DUR = 1000;
export const SPIN_FORWARD_CLASS = 'js-spin-fwd';
export const SPIN_BACKWARD_CLASS = 'js-spin-bwd';
export const DISABLE_TRANSITIONS_CLASS = 'js-transitions-disabled';