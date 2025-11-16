import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./Hero.scss"
// Import CSS
import "./Page.css";

// Import ảnh
import imgSrc from "../assets/images/upscalemedia-transformedd.png";

gsap.registerPlugin(ScrollTrigger);

export default function Page() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".wrapper",
            start: "top top",
            end: "+=150%",
            pin: true,
            scrub: true,
            markers: false,

          },
        })
        .to("img", {
          scale: 2,
          z: 350,
          transformOrigin: "center center",
          ease: "power1.inOut",
        })
        .to(
          ".section.hero",
          {
            scale: 1.1,
            transformOrigin: "center center",
            ease: "power1.inOut",
          },
          "<"
        );
    });

    return () => ctx.revert(); // cleanup GSAP
  }, []);

  return (
    <div className="wrapper">
      <div className="contentt">
        <section className="section hero">
           <section className="hero">
      <div className="hero-content ">
        <h1 className="hero-title">
          Chào mừng 80 năm <br /> Ngày Nhà giáo Việt Nam <br /> 20/11 🎉
        </h1>

        <p className="hero-desc">
          Hành trình tôn vinh những người <br /> đưa tri thức đến muôn thế hệ,<br /> từ truyền thống đến thời đại số.
        </p>

        <p className="hero-slogan">Dẫn lối trong kỷ nguyên số</p>

      </div>
    </section>
        </section>
     
      </div>

      <div className="image-container">
        <img src={imgSrc} alt="image" />
      </div>
    </div>
  );
}
