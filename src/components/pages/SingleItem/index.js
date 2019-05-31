import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { addToFavoriteActionType, addToCartActionType } from './actions';
import './style.scss';

const SingleItem = (props) => {
  const { name, price, category, stocked, icon, id } = props.oneItem;
  const addToSidebar = () => {
    if (props.favoriteItems.length > 0 && props.favoriteItems.find(item => item.id === id)) {
      alert('already in favorite!')
    } else {
      props.addSide(props.oneItem);
    }
  }
  const addToCart = () => {
    if (props.cartItems.length > 0 && props.cartItems.find(item => item.id === id)) {
      alert("already in cart!")
    } else {
      props.addCart(props.oneItem);
    }
  }
  return (
    <div className='page single-item-page'>
      <h1>{name}</h1>
      <p>price: {price}</p>
      <p>{stocked ? 'STOCKED' : 'NOT STOCKED'}</p>
      <img src={icon.src} alt={name} />
      <NavLink to='/items' className='back'><i className="far fa-arrow-alt-circle-left"></i></NavLink>
      <div className='handlers'>
        <i className="fas fa-star" onClick={addToSidebar}></i>
        <i className="fas fa-shopping-cart" onClick={addToCart}></i>
      </div>
    </div>
  )
}


const mapStateToProps = (state, ownProps) => {
  const singleId = ownProps.match.params.id;
  const oneItem = state.itemsContainer.items.find(item => parseFloat(singleId) === item.id);
  return {
    oneItem,
    favoriteItems: state.sidebar.favorite,
    cartItems: state.cartContainer.cart
  }
}

const mapDispatchToProps = {
  addSide: addToFavoriteActionType,
  addCart: addToCartActionType
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleItem);