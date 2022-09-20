import React from 'react';

function Card() {
  return (
    <div className='card'>
      <div className='flex timing-header'>
        <span className='count'>+2</span>
        <img width={30} src='header/bag (3).png' alt='bag' />
        <span className='bg-color'>
          <strong>Ends</strong>: Jan 08, Fri, 00:00 PM
        </span>
        <span className='trade'>
          <img width={20} src='statistics.png' alt='statistics' />
        </span>
      </div>
      <div className='phone'>
        <span className='heart'>
          <img width={20} src='heart-s.png' alt='heart' />
        </span>
        <img width={215} src='cs.png' alt='cs-phone' />
      </div>
      <h4>SAMSUNG Galaxt S20 FE 5G Factory Unlocked Android Cell</h4>
      <p className='small'>Your Price</p>
      <h3 className='price'>
        $182 <span>99</span>
      </h3>
    </div>
  );
}

export default Card;
