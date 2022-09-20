import React from 'react';
import { BsStarFill, BsStar, BsStarHalf } from 'react-icons/bs';

const imgArray = [
  's20-img1-m.png',
  's20-img-m.png',
  's20-img3-m.png',
  's20-img4-m.png',
  // '5@2x.png',
];

function Product() {
  return (
    <div className='product'>
      <div className='flex'>
        <div className='flex-col'>
          {imgArray.map((img) => (
            <span className='small-img'>
              <img width={61} src={`/product1/${img}`} alt={img} />
            </span>
          ))}
        </div>
        <div className='s20-fe'>
          <img width={300} src='product1/s20-img-main-m.png' alt='sdgdsg' />
        </div>
      </div>
      <h3>
        SAMSUNG Galaxy S20 FE 5G Factory Unlocked Android Cell Phone New 64GB
        Orange
      </h3>
      <div>
        <p className='ratings'>
          <BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStarHalf /> <BsStar />
          <span>(7,114ratings)</span>
        </p>

        <p className='para'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque rem
          soluta architecto iure reiciendis minima, magni, atque fugiat suscipit
          sapiente ipsa, voluptatibus quibusdam quo tenetur repudiandae
        </p>
      </div>
    </div>
  );
}

export default Product;
