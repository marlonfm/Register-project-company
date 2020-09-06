import React from 'react';
import Routes from './routes';
import './allContents.css';
import Context from './context/Access/index';

export function App() {
  return(
    <Context>
    <Routes/>
    </Context>

  );
}

export default App;
