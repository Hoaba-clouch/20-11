import "./TimelineSection.scss";

function TimelineSection() {
  return (
    <section className="timeline">
      <div className="container">
        <h2 className="timeline-title">Hành trình Người Lái Đò Thế Hệ Số</h2>

        <div className="timeline-line"></div>

        <div className="timeline-items">

          {/* Step 1 */}
          <div className="timeline-item fade-up">
            <div className="dot"></div>
            <h3>Thầy nhận ra tiềm năng</h3>
            <p>
              Thầy là người đầu tiên nhìn thấy năng lực lập trình trong em và định hướng em tham gia kỳ thi huyện.
            </p>
          </div>

          {/* Step 2 */}
          <div className="timeline-item " >
            <div className="dot"></div>
            <h3>Những lời thầy đã nói</h3>
            <p>
              “Lập trình không phải giỏi ngay từ đầu, mà là hành trình của sự kiên nhẫn.”  
              Những lời đó đã thay đổi cách em nhìn lập trình.
            </p>
          </div>

          {/* Step 3 */}
          <div className="timeline-item " >
            <div className="dot"></div>
            <h3>Thầy đồng hành kiên nhẫn</h3>
            <p>
              Thầy kèm từng bài, sửa từng lỗi, định hình tư duy đúng. Em dần trưởng thành hơn qua từng buổi học.
            </p>
          </div>

          {/* Step 4 */}
          <div className="timeline-item ">
            <div className="dot"></div>
            <h3>Thành quả & hành trình mới</h3>
            <p>
              Em đạt giải Nhì và bắt đầu yêu lập trình. Từ đó, thầy chính là người lái đò dẫn em bước vào thời đại số.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default TimelineSection;
