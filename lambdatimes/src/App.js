import React from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Content from './components/Content/Content';
import MyCarousel from './components/Carousel/Carousel'

const App = () => {
  return (
    <div className="App">
      <TopBar />
      <Header />
      <MyCarousel />
      <Content />
    </div>
  );
}

export default App;
