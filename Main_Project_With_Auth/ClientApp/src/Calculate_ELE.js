import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Calculate_ELE() {
  let navigate = useNavigate();

  const [water, setWater] = useState('');
  const [electricity, setElectricity] = useState('');
  const [gas, setGas] = useState('');
  const [results, setResults] = useState(null);

  const handleCalculate = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/prediction', {
        water: parseFloat(water),
        electricity: parseFloat(electricity),
        gas: parseFloat(gas)
      });

      // 假设响应数据有 co2Emission 和 treesSaved 字段
      setResults(response.data);
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleCalculate}>
        <div>
          <label>
            Water consumption:
            <input
              type="number"
              value={water}
              onChange={(e) => setWater(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Electricity consumption:
            <input
              type="number"
              value={electricity}
              onChange={(e) => setElectricity(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Gas consumption:
            <input
              type="number"
              value={gas}
              onChange={(e) => setGas(e.target.value)}
            />
          </label>
        </div>
        
        <button type="submit">Calculate Emissions</button>
      </form>

      {/* 显示预测结果 */}
      {results && (
        <div>
          <p>CO2 Emissions: {results.co2Emission} units</p>
          <p>Trees saved from being cut down: {results.treesSaved}</p>
        </div>
      )}

      {/* 返回首页的按钮 */}
      <button onClick={() => navigate('/')}>返回首页</button>
    </div>
  );
}

export default Calculate_ELE;
