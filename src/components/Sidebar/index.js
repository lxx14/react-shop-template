import React from 'react';
import { connect } from 'react-redux';
import './style.scss';

const Sidebar = (props) => {

  const deleteItem = (e) => {
    const question = confirm('delete from favorite?');
    if (question) {
      props.deleteFromFavorite(e.target.id)
    }

  }

  if (props.sideBarItems.length > 0) {
    const renderFavorite = props.sideBarItems.map(item => <div key={item.id}><img src={item.icon.src} id={item.id} alt={item.name} onClick={deleteItem} /></div>)
  } else {
    const renderFavorite = <p>empty now!</p>
  }


  return (
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
const mapDispatchToProps = (dispatch) => ({
  deleteFromFavorite: (data) => dispatch({ type: "DELETE_FROM_FAVORITE", data })
})

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);