import React from 'react';
import './style.scss';

const Header = () => {
  return(
    <div className='header'>
      <ul className='navi'>
        <li><a href='/'><i className="fas fa-desktop"></i>About Us</a></li>
        <li><a href='/items'><i className="fas fa-store"></i>Items</a></li>
        <li><a href='/cart'><i className="fas fa-shopping-basket"></i>Cart</a></li>
        <li><a href='/contacts'><i className="fas fa-phone"></i>Contacts</a></li>
      </ul>
    </div>
  )
}

export default Header;