
import ScrollReveal from "scrollreveal";
import { useEffect,useState } from "react";
import BackToTop from './component/BackToTop'
import Footer from './component/Footer'
import Gallery from './component/Gallery'
import Hero from './component/Hero'
import StorySection from './component/StorySection'
import TimelineSection from './component/TimelineSection'
import Tribute from './component/Tribute'
import './index.css'
import Lenis from "@studio-freight/lenis";
import BookFlip from "./component/BookFlip";
import Page from "./component/Page";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import CardList from "./component/CardList";

gsap.registerPlugin(ScrollTrigger);
function App() {
 
const [theme, setTheme] = useState('light'); 

  const toggleTheme = () => {
    // Chuyển đổi giữa 'light' và 'dark'
    setTheme(currentTheme => (currentTheme === 'light' ? 'dark' : 'light'));
  };


  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
      smoothTouch: true,
    });
let requestID;
    function raf(time) {
      lenis.raf(time);
 requestID = requestAnimationFrame(raf)
    }
    requestID = requestAnimationFrame(raf);

 ScrollTrigger.scrollerProxy(document.body, {
        scrollTop(value) {
            return arguments.length ? lenis.scrollTo(value, { duration: 0, immediate: true }) : lenis.scroll;
        },
        getBoundingClientRect() {
            return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
        }
    });
     lenis.on('scroll', ScrollTrigger.update);
    
    // 5. BẮT BUỘC REFRESH: Đảm bảo ScrollTrigger tính toán lại ngay
    ScrollTrigger.refresh();
const sr = ScrollReveal({
  distance: "80px",
  duration: 900,
  delay: 150,
  easing: "ease-out",
  reset: true,
  mobile: true,
  opacity: 0,
  container: document.documentElement
});

    /* HERO */
    sr.reveal(".hero-title", { origin: "top" });
    sr.reveal(".hero-desc", { origin: "left", delay: 300 });
    sr.reveal(".hero-slogan", { origin: "right", delay: 400 });
    sr.reveal(".hero-btn", { origin: "bottom", delay: 500 });

    /* STORY */
    sr.reveal(".story-box", {
      origin: "bottom",
      interval: 200,
    });

    /* TIMELINE */
    sr.reveal(".timeline-item:nth-child(odd)", {
      origin: "left",
      interval: 200,
    });

    sr.reveal(".timeline-item:nth-child(even)", {
      origin: "right",
      interval: 200,
    });

    /* GALLERY */
    sr.reveal(".gallery-item", {
      origin: "bottom",
      interval: 150,
      scale: 0.9,
    });

    /* TRIBUTE */
    sr.reveal(".tribute-box", {
      origin: "bottom",
      scale: 0.95,
      delay: 300,
    });
return () => {
        // Dừng vòng lặp raf để tránh lỗi
        cancelAnimationFrame(requestID); 
        // Hủy proxy
        ScrollTrigger.scrollerProxy(document.body, null); 
        // Hủy tất cả ScrollTriggers đã tạo trong Page.jsx
        ScrollTrigger.getAll().forEach(t => t.kill());
    }
  }, []);
  return (
    <>
    <div className={`app-container ${theme}`} id="lenis-root">
      <button className="btnn" onClick={toggleTheme} style={{
          position: 'fixed', 
          top: '10px', 
          right: '15px', 
          zIndex: 100000, 
          padding: '10px',
          border: '1px solid currentColor',
          cursor: 'pointer',
          borderRadius: '50px',
          background :'#e76f51'
      }}>
         {theme === 'light' ? ' 🌑' : '☀️'}
      </button>
      <Page/>
     
      <CardList/>
      <StorySection />
      <TimelineSection />
      <Gallery />
      <BookFlip/> 
      <Tribute />
      <Footer />
      <BackToTop />
      
       </div>
    </>
   
  );
}

export default App;
