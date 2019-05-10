import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AboutUs from '../pages/AboutUs';
import Cart from '../pages/Cart';
import Contacts from '../pages/Contacts';
import MainPageItems from '../pages/MainPageItems';
import SingleItem from '../pages/SingleItem';

export default function () {
  return (
    <Switch>
      <Route exact path='/' component={AboutUs} />
      <Route path='/cart' component={Cart} />
      <Route path='/items' component={MainPageItems} />
      <Route path='/contacts' component={Contacts} />
      <Route path='/singleItem/:id' component={SingleItem} />
    </Switch>
  )
}