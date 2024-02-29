import React from 'react';

function Home() {
  // Sample data
  const data = [
    'AMZN', '200', '-0.25%', 'Low Risk',
    'TSLA', '200', '-0.25%', 'High Risk',
    'ABQQ', '200', '-0.25%', 'High Risk',
    'MSFT', '200', '-0.25%', 'Low Risk',
    'PYPL', '200', '-0.25%', 'Low Risk',
    'NFLX', '200', '-0.25%', 'Low Risk',
    'NFLX', '200', '-0.25%', 'Low Risk',
    'NFLX', '200', '-0.25%', 'Low Risk',
    'NFLX', '200', '-0.25%', 'Low Risk',
    'NFLX', '200', '-0.25%', 'Low Risk',
  ];

  // Function to chunk the data into arrays of 4 items each
  const chunkArray = (arr, size) => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
      arr.slice(i * size, i * size + size)
    );
  };

  // Chunk the data into arrays of 4 items each
  const chunkedData = chunkArray(data, 4);

  return (
    <main className='main-container'>
      <div className='main-title'></div>

      <div className='main-table'>
        {chunkedData.map((row, index) => (
          <div key={index} className="table-row" style={{ backgroundColor: index % 2 === 0 ? '#424242' : '#424242', padding: '5px 10px', display: 'flex', marginBottom: '10px' }}>
            {row.map((cell, idx) => (
              <div key={idx} className="table-cell" style={{ margin: '5px 120px', fontSize: '16px', color: idx === 3 ? (cell === 'Low Risk' ? '#D94111' : '#118F4B') : 'white' }}>{cell}</div>
            ))}
          </div>
        ))}
      </div>
    </main>
  );
}

export default Home;
