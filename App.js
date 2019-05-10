import React, { Component } from 'react';
import Footer from './src/components/Footer';
import Header from './src/components/Header';
import Sidebar from './src/components/Sidebar';
import MainPageItems from './src/components/pages/MainPageItems';
import './style.scss';

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <MainPageItems />
        <Sidebar />
        <Footer />
      </div>
    );
  }
}

export default App;
