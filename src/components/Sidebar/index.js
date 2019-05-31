import React from 'react';
import { connect } from 'react-redux';
import './style.scss';

const Sidebar = (props) => {
  console.log(props.sideBarItem);
  const {id, name, src} = props.sideBarItem;
  const renderFavorite=props.sideBarItem.map(item=><div key={item.id}><img src={item.icon.src} alt={item.name} /></div>)
  return(
    <div className='sidebar'>
      <h1>Sidebar</h1>
      <div className='sidebar-image'></div>
      {renderFavorite}
    </div>
  )
}

const mapStateToProps = (state) => ({
  sideBarItem: state.sidebar.favorite
})

export default connect(mapStateToProps)(Sidebar);