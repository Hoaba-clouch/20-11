import "./BookFlip.css";

export default function BookFlip() {
  return (
    <div className="book-component">
      <div className="imgLoader"></div>

      <div className="containerr">
        <h1 className="title">
          Nhũng trang ảnh đẹp <br /> trong giảng dạy xưa và nay
        </h1>

        <div className="credit">
          * Các bạn có thể lần lượt xem qua nhé!
        </div>

        <div className="book">
          <div className="gap"></div>

          <div className="pages">
            <div className="page"></div>
            <div className="page"></div>
            <div className="page"></div>
            <div className="page"></div>
            <div className="page"></div>
            <div className="page"></div>
          </div>

          <div className="flips">
            <div className="flip flip1">
              <div className="flip flip2">
                <div className="flip flip3">
                  <div className="flip flip4">
                    <div className="flip flip5">
                      <div className="flip flip6">
                        <div className="flip flip7"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
