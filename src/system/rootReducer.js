import { combineReducers } from 'redux';

import itemsContainer from '../components/pages/MainPageItems/reducer';
import cartContainer from '../components/pages/Cart/reducer';
import sidebar from '../components/Sidebar/reducer';

export default combineReducers({
  itemsContainer,
  cartContainer,
  sidebar
});