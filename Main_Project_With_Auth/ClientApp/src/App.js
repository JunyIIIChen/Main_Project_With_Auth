// App.js
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Calculate_ELE from './Calculate_ELE'; // Calculate_ELE 组件

function App() {
  let location = useLocation();

  return (
    <div>
      {/* 仅在非 /calculate_ele 路径时显示这个链接 */}
      {location.pathname == '/' && (
        <a href="/calculate_ele">Calculate the electricity</a>
      )}
      
      {/* 路由配置 */}
      <Routes>
        <Route path="/" element={
          <div>
            {/* 首页的其他内容 */}
          </div>
        } />
        <Route path="/calculate_ele" element={<Calculate_ELE />} />
        {/* ...其他路由 */}
      </Routes>
    </div>
  );
}

export default App;
