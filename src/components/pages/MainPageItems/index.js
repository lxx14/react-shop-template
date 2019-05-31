import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { setItemsActionType } from './actions';
import './style.scss';

class MainPageItems extends Component {
  constructor(props) {
    super(props)
    this.state = {
      findValue: ''
    }
  }
  onChangeHandler = (e) => {
    this.setState({
      findValue: e.target.value
    })
  }

  handleFind = () => {
    this.props.setFindString(this.state.findValue);
  }

  render() {
    const renderItems = this.props.items.map(item => <div key={item.id} className='img-wrap'><NavLink to={`/singleItem/${item.id}`}>Go to item</NavLink><img src={item.icon.src} /></div>)
    return (
      <div className='page'>
        <div>
          <input type='text' onChange={this.onChangeHandler} placeholder="fast example: ball" />
          <button type='button' onClick={this.handleFind}>Find item</button>
        </div>
        <div className='items'>
          {renderItems}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  items: state.itemsContainer.items.filter(item => item.name.toLowerCase().includes(state.itemsContainer.searchString))
})

const mapDispatchToProps = {
  setFindString: setItemsActionType
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPageItems);