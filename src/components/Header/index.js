import React from 'react';
import './style.scss';

const Header = () => {
  return(
    <div className='header'>
      <ul>
        <li><a href='#'>About Us</a></li>
        <li><a href='#'>Items</a></li>
        <li><a href='#'>Cart</a></li>
        <li><a href='#'>Contacts</a></li>
      </ul>
    </div>
  )
}

export default Header;