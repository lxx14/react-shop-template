import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import './style.scss';

const SingleItem = (props) => {
  const {name, price, category, stocked, icon} = props.oneItem;
  return(
    <div className='page single-item-page'>
      <h1>{name}</h1>
      <p>price: {price}</p>
      <p>{stocked ? 'STOCKED' : 'NOT STOCKED'}</p>
      <img src={icon.src} alt={name} />
      <NavLink to='/items' className='back'><i className="far fa-arrow-alt-circle-left"></i></NavLink>
    </div>
  )
}


const mapStateToProps = (state, ownProps) => {
  const singleId = ownProps.match.params.id;
  const oneItem = state.itemsContainer.items.find( item => parseFloat(singleId) === item.id);
  console.log(oneItem);
  return {
    oneItem
  }
}

export default connect(mapStateToProps)(SingleItem);