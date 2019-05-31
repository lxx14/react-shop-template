import React from 'react';
import { connect } from 'react-redux';
import './style.scss';

const Cart = (props) => {
  const cartRender = props.cart.map(item=><div className="cart-item" key={item.id}><div><img src={item.icon.src} alt={item.name} /><p><button className="button-ok" type="button" onClick={()=>alert('Thanks for purchase! :)')}>confirm</button><button type="button" className="button-delete">delete</button></p></div><p className="price">{item.price}</p></div>)
  return(
    <div className='page cart'>
      <h1>Cart</h1>
      {cartRender}
    </div>
  )
}

const mapStateToProps = (state) => ({
  cart: state.cartContainer.cart
})

export default connect(mapStateToProps)(Cart);