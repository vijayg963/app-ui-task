import { useState } from 'react';
import Card from './Card';
import Condition from './Condition';
import Header from './Header';
import Offer from './Offer';
import Product from './Product';
import Tranding from './Tranding';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='container'>
        <Tranding />
        <div className='flex wrap'>
          <Product />
          <div>
            <div className='flex wrap'>
              <Card />
              <Card />
              <Card />
            </div>
            <div className='flex wrap'>
              <Condition />
              <Offer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
