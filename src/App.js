import React from 'react';
import Header from './components/Header';
import Main from './pages/main';
import Sites from './components/Sites'
// import PageTwo from './pages/pagetwo';
// import Channels from './components/Channels'
// import './index.css'

function App() {
  return (
   <div className="App">
      <Header /> 
      {/* <Channels />  */}
      <Main />
      {/* <PageTwo /> */}
      <Sites />
   </div>
  );
}

export default App;
