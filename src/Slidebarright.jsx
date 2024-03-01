import React from 'react';

function Slidebarright() {
  return (
    <div className='sidebar-right'>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <p>Filters</p>
      </div>
      <div className="grey-row">Stock</div>
      <div className="grey-row">Search Bar</div>
      <div className="black-row"></div>
      <div className="grey-row">Industry</div>
      
      <div style={{ marginBottom: '20px' }}></div>
      <ul>
        <li className="pair-item">Health Care</li>
        <li className="pair-item">IT</li>
        <li className="pair-item">Materials</li>
        <li className="pair-item">Communication</li>
        <li className="pair-item">Energy</li>
        <li className="pair-item">Industrials</li>
        <li className="pair-item">Consumer Discretionary</li>
        <li className="pair-item">Utilities</li>
        <li className="pair-item">Consumer Staples</li>
        <li className="pair-item">Financials</li>
        <li className="pair-item">Real Estate</li>
      </ul>
      <div style={{ marginBottom: '20px' }}></div>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <button className="blue-button">Apply</button>
      </div>
      <div style={{ marginBottom: '20px' }}></div>
    </div>
  );
}

export default Slidebarright;
