import React, { Component } from 'react';
import Header from './components/Header';
import Main from './pages/main';
import PageTwo from './pages/pagetwo';
import './index.css'

function App() {
  return (
   <div className="App">
      <Header />  
      <Main />
      <PageTwo />
   </div>
  );
}

export default App;
