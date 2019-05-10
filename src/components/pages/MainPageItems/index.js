import React, { Component } from 'react';
import { itemsList } from './service';
import './style.scss';

class MainPageItems extends Component {
    componentDidMount() {
    const items = itemsList();
  }

  render() {
    return(
      <div className='page'>
        <h1>Main page</h1>
      </div>
    )
  }
}

export default MainPageItems;