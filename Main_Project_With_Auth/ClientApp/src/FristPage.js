import React, { useState, useEffect } from 'react';
import './ScrollingPage.css'; // 确保您的CSS文件是正确的
import { throttle } from 'lodash'; // 确保 lodash 已经安装并导入

const ScrollingPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 4; // 定义内容页面的总数，不包括页脚页面

  const handleScroll = throttle(() => {
    const scrolledHeight = window.scrollY;
    const pageIndex = Math.floor(scrolledHeight / window.innerHeight); // 计算页面索引，从0开始
    const pageOffset = scrolledHeight % window.innerHeight;
    const threshold = window.innerHeight * 0.3;
    setCurrentPage(pageOffset > threshold ? Math.min(pageIndex + 2, totalPages) : pageIndex + 1);
  }, 100);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      handleScroll.cancel();
    };
  }, [handleScroll]);

  const navigateToPage = (pageNum) => {
    const pageTop = window.innerHeight * (pageNum - 1);
    window.scrollTo({
      top: pageTop,
      behavior: 'smooth'
    });
  };

  const renderNavigationDots = () => {
    return (
      <div className="navigation-dots">
        {Array.from({ length: totalPages }, (_, i) => (
          <div
            key={i}
            className={`dot ${currentPage === i + 1 ? 'active' : ''}`}
            onClick={() => navigateToPage(i + 1)}
          ></div>
        ))}
      </div>
    );
  };

  const renderPages = () => {
    return (
      <>
        <div key="page1" className={`page ${currentPage === 1 ? 'page-current' : ''}`} style={{ height: window.innerHeight }}>
          <div className="page-content">66666</div>
        </div>
        <div key="page2" className={`page ${currentPage === 2 ? 'page-current' : ''}`} style={{ height: window.innerHeight }}>
          <div className="page-content">nb</div>
        </div>
        <div key="page3" className={`page ${currentPage === 3 ? 'page-current' : ''}`} style={{ height: window.innerHeight }}>
          <div className="page-content">this is 3</div>
        </div>
        <div key="page4" className={`page ${currentPage === 4 ? 'page-current' : ''}`} style={{ height: window.innerHeight }}>
          <div className="page-content">Content for page 4</div>
        </div>
        {/* 页脚作为额外页面添加 */}
        <div key="footer" className="page footer-page">
          <div className="footer-content">
            <div className="links">
              <a href="#">first page</a>
              <a href="#">introduction</a>
              <a href="#">help</a>
              {/* ...other link... */}
            </div>
            <p className="copyright">copyright &copy; information 2023。</p>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="scrolling-page-container">
      {renderPages()}
      {renderNavigationDots()}
    </div>
  );
};

export default ScrollingPage;
