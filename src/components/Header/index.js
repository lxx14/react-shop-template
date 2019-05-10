import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

const Header = () => {
  return(
    <div className='header'>
      <ul className='navi'>
        <li><NavLink exact to='/'><i className="fas fa-desktop"></i>About Us</NavLink></li>
        <li><NavLink to='/items'><i className="fas fa-store"></i>Items</NavLink></li>
        <li><NavLink to='/cart'><i className="fas fa-shopping-basket"></i>Cart</NavLink></li>
        <li><NavLink to='/contacts'><i className="fas fa-phone"></i>Contacts</NavLink></li>
      </ul>
    </div>
  )
}

export default Header;