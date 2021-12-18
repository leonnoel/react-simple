import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import CatHeader from './CatHeader';
import SectionMain from './SectionMain';
import RatMiddle from './RatMiddle';
import Aside from './Aside';
import DuckFooter from './DuckFooter';
import Footer from './Footer';

// 
class App extends Component {

  render() {
    return (
      <div className="App">
        <CatHeader backColor="grey" width="300px"></CatHeader>
        <Header backColor="green" width="200px"></Header>
        <SectionMain></SectionMain>
        <RatMiddle backColor="purple" width="300px"></RatMiddle>
        <Aside></Aside>
        <DuckFooter backColor="orange" width="300px"></DuckFooter>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
