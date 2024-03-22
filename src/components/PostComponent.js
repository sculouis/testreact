// React 函数组件示例，使用 useEffect Hook 在组件加载和更新时获取数据:
import React, { useState, useEffect } from 'react';

function PostComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/data');
        const json = await response.json();
        console.log('Data: ', json);
        setData(json);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []); // 空数组表示此效果只在组件挂载时运行一次

  function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}/${month}/${day}`;
  }

  return (
    <div>
      {data ? (
        <div className="bg-green-100 p-4 rounded-md">
          <h2 className="text-green-700 text-lg font-semibold mb-4">Data List:</h2>
          <ul>
            {data.map((item, index) => (
              <li key={index} className="flex items-center mb-2">
                <strong className="w-24 mr-4 text-green-800">Title:</strong>
                <span className="text-green-600">{item.title}</span>
                <strong className="w-24 ml-4 mr-2 text-green-800">Date:</strong>
                <span className="text-green-600">{formatDate(new Date(item.date))}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}
  

export default PostComponent;
