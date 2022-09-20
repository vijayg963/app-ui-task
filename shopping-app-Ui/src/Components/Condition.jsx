import React from 'react';

function Condition() {
  return (
    <div className='condition'>
      <h5>Condition</h5>
      <div>
        <span className='box'>New</span>
        <span className='box light'>New-Open Box</span>
      </div>
      <h5>Color</h5>
      <div className='color'>
        <span className='box sqr'>
          <div className='circle'></div> Blue
        </span>
        <span className='light box sqr'>
          <div className='circle green'></div>
          Green
        </span>
      </div>
    </div>
  );
}

export default Condition;
