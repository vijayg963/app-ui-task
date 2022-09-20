import React from 'react';
import { RiVideoAddLine } from 'react-icons/ri';

function Header() {
  return (
    <div>
      <header className='flex'>
        <span className='logo hide-s'>
          LO<strong>go</strong>
        </span>
        <span className='set-icons menu'>
          <img src='header/menu-s.png' alt='menu' />
          Menu
        </span>
        <span className='set-icons'>
          <img src='header/Location-s.png' alt='location' />
          Location
        </span>
        <div className='set-icons search-bar hide'>
          <span className='filter'>
            <img src='header/Filter-s.png' alt='filter' />
          </span>
          <div className='set-icons'>
            <img src='header/Search-s.png' alt='search' />
            <div className='set-input'>
              <input type='text' />
            </div>
            <img className='closing' src='header/Close (2).png' alt='close' />
          </div>
        </div>
        <span className='road-show'>
          <strong>
            <RiVideoAddLine />
          </strong>
          Road Shows
        </span>
        <span>
          <img src='header/Trending-s.png' alt='trending' />
        </span>
        <span>
          <img src='header/bag (2).png' alt='beg' />
        </span>
        <div className='profile hide-s'>
          <img src='header/michael-s.png' alt='martha' />
          <p>Hi Martha</p>
        </div>
      </header>
    </div>
  );
}

export default Header;
