import React from 'react';
import './App.css';

import ActionKeys from "./components/ButtonComponents/ActionKeys"
import NumberKeys from "./components/ButtonComponents/NumberKeys"

const App = () => {
  return (
    <div className='calculator'>
      
      <NumberKeys />       
      <ActionKeys />
    </div>
  );
};

export default App;
