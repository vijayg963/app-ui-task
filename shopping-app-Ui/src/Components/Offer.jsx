import React from 'react';

function Offer() {
  return (
    <div className='offer'>
      <div>
        <div className='hr'></div>
        <h3>My Offer Details</h3>
      </div>
      <div className='justify-content'>
        <div>
          <p className='request'>
            Request
            <span>
              <img src='req.png' alt='' />
            </span>
          </p>
          <h6>Quantity</h6>
        </div>
        <div>
          <select name='Select' id='select' placeholder='Select'>
            <option value=''>Select</option>
          </select>
          <button className='btn'>My offer</button>
        </div>
      </div>
    </div>
  );
}

export default Offer;
