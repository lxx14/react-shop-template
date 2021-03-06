import React from 'react';
import { connect } from 'react-redux';
import { deleteCartActionType } from './actions';
import './style.scss';

const Cart = (props) => {
  const deleteFromCart = (e) => {
    props.deleteCart(e.target.id);
  }

  const cartRender = props.cart.map(item => <div className="cart-item" key={item.id}><div><img src={item.icon.src} alt={item.name} /><p><button className="button-ok" type="button" onClick={() => alert('Thanks for purchase! :)')}>confirm</button><button type="button" className="button-delete" onClick={deleteFromCart} id={item.id}>delete</button></p></div><p className="price">{item.price}</p></div>)
  return (
    <div className='page cart'>
      <h1>Cart</h1>
      {cartRender}
    </div>
  )
}

const mapStateToProps = (state) => ({
  cart: state.cartContainer.cart
})

const mapDispatchToProps = {
  deleteCart: deleteCartActionType
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);