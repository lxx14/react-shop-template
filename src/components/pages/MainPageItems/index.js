import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './style.scss';

class MainPageItems extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    const renderItems = this.props.items.map(item=><div key={item.id} className='img-wrap'><NavLink to={`/singleItem/${item.id}`}>Go to item</NavLink><img src={item.icon.src} /></div>)
    return(
      <div className='page'>
        {renderItems}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  items: state.itemsContainer.items
})

export default connect(mapStateToProps)(MainPageItems);