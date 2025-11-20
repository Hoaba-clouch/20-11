// src/pages/HomePage.jsx

import React from 'react';
// 1. ✅ IMPORT TẤT CẢ CÁC SECTION CỦA TRANG CHỦ TẠI ĐÂY
import Gallery from '../component/Gallery'

import StorySection from '../component/StorySection'
import TimelineSection from '../component/TimelineSection'
import Tribute from '../component/Tribute' // Nếu đây là Form Tri Ân CŨ (chỉ giao diện)
import CardList from "../component/CardList";
import BookFlip from "../component/BookFlip";
import Page from "../component/Page";
// ... (Thêm bất kỳ component nào thuộc trang Chủ)

export default function HomePage() {
  return (
    <>
 
    
      <CardList/>
      <StorySection />
      <TimelineSection />
      <Gallery />
      <BookFlip/> 
      <Tribute /> 
    </>
  );
}