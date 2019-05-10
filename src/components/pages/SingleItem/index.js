import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

const SingleItem = () => {
  return(
    <div className='page'>
      <h1>SingleItem</h1>
      <NavLink to='/items' className='back'><i className="far fa-arrow-alt-circle-left"></i></NavLink>
    </div>
  )
}

export default SingleItem;