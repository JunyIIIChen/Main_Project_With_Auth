// App.js
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import FristPage from './FristPage'; // FristPage 组件

function App() {
  let location = useLocation();

  return (
    <div>
      {/* 仅在非 /FristPage 路径时显示这个链接 */}
      {location.pathname == '/' && (
        <a href="/FristPage">FristPage</a>
      )}
      
      {/* 路由配置 */}
      <Routes>
        <Route path="/" element={
          <div>
            {/* 首页的其他内容 */}
          </div>
        } />
        <Route path="FristPage" element={<FristPage />} />
        {/* ...其他路由 */}
      </Routes>
    </div>
  );
}

export default App;
