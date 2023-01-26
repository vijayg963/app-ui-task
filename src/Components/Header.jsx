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

        <span className='logo-main display'>
          <img width={200} height={50} src='Koboldo_logo@2x.png' alt='logo' />
        </span>
        <span className='road-show display'>
          <strong>
            <RiVideoAddLine />
          </strong>
        </span>
        <span className='display'>
          <img src='header/Search-s.png' alt='search' />
        </span>
        <span className='set-icons hide-s'>
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
        <span className='road-show hide-s'>
          <strong>
            <RiVideoAddLine />
          </strong>
          Road Shows
        </span>
        <span className='hide-s'>
          <img src='header/Trending-s.png' alt='trending' />
        </span>
        <span className='hide-s'>
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
