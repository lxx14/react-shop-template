import React, { Component } from 'react';
import Footer from './src/components/Footer';
import Header from './src/components/Header';
import Sidebar from './src/components/Sidebar';
import MainPageItems from './src/components/pages/MainPageItems';
import Router from './src/components/Router';
import { BrowserRouter } from 'react-router-dom';
import './style.scss';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className='container'>
          <Header />
          <Router />
          <Sidebar />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
