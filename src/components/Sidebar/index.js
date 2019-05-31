import React from 'react';
import { connect } from 'react-redux';
import './style.scss';

const Sidebar = (props) => {
  if (props.sideBarItems.length>0) {
  const renderFavorite=props.sideBarItems.map(item=><div key={item.id}><img src={item.icon.src} alt={item.name} /></div>)
  } else {
    const renderFavorite=<p>empty now!</p>
  }
  return(
    <div className='sidebar'>
      <h1>Sidebar</h1>
      <div className='sidebar-image'></div>
      {renderFavorite}
    </div>
  )
}

const mapStateToProps = (state) => ({
  sideBarItems: state.sidebar.favorite
})

export default connect(mapStateToProps)(Sidebar);