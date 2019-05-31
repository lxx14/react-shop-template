import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './style.scss';

const Header = (props) => {
  return (
    <div className='header'>
      <ul className='navi'>
        <li><NavLink exact to='/'><i className="fas fa-desktop"></i>About Us</NavLink></li>
        <li><NavLink to='/items'><i className="fas fa-store"></i>Items</NavLink></li>
        <li><NavLink to='/cart'><i className="fas fa-shopping-basket"></i>Cart: <span>{props.itemsCart.length}</span></NavLink></li>
        <li><NavLink to='/contacts'><i className="fas fa-phone"></i>Contacts</NavLink></li>
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => ({
  itemsCart: state.cartContainer.cart
})



export default connect(mapStateToProps)(Header);