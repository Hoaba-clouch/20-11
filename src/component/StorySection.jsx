import "./StorySection.scss";

function StorySection() {
  return (
    <section className="story">
      <div className="container">

        <h2 className="story-title">Câu chuyện của em và thầy</h2>

        <div className="story-grid">

          {/* Đoạn 1 */}
          <div className="story-box ">
            <h3>Khởi đầu</h3>
            <p>
              Ngày đó, em chỉ là một cậu học trò bình thường, học Pascal như bao bạn khác.
              Khi nhà trường chuẩn bị chọn học sinh đi thi huyện, chính thầy – người dạy lập trình của em –
              là người đầu tiên nhìn thấy tiềm năng mà em chưa bao giờ nhận ra. Thầy đề nghị em thử sức và 
              trực tiếp nhận phần ôn luyện cho em cùng một bạn khác. Dù chưa thật sự đam mê, nhưng vì tin thầy, em đã gật đầu.
            </p>
          </div>

          {/* Đoạn 2 */}
          <div className="story-box " >
            <h3>Khủng hoảng & bước ngoặt</h3>
            <p>
              Những buổi đầu ôn thi, em thấy đề khó hơn mình nghĩ rất nhiều. Đi học thầy rồi về nhà, 
              em lại không luyện thêm. Em nản và từng nói muốn bỏ. Nhưng thầy đã ngồi lại, động viên:
              <br /> <br />
              <i>“Lập trình không phải là giỏi ngay từ đầu. Nó là hành trình của sự kiên nhẫn.”</i>
              <br />
              <i>“Khi con làm dòng code đầu tiên chạy đúng, nỗi sợ trong con sẽ biến mất.”</i>
              <br /> <br />
              Những lời ấy đã thay đổi em – từ sợ lập trình thành muốn khám phá nó.
            </p>
          </div>

          {/* Đoạn 3 */}
          <div className="story-box " >
            <h3>Thành quả & tri ân</h3>
            <p>
              Chỉ còn một tháng trước kỳ thi, em mới thật sự cố gắng. Thầy vẫn kiên nhẫn kèm từng bài.
              Kết quả, em đạt giải Nhì, bạn em đạt giải Ba. Nhưng điều quý nhất không phải tấm huy chương,
              mà là thầy đã gieo vào em đam mê lập trình và niềm tin vào tương lai. 
              Đối với em, thầy chính là “người lái đò thế hệ số”.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default StorySection;
