import React from 'react';
import './index.css';

import ActionKeys from "./components/ButtonComponents/ActionKeys"
import NumberKeys from "./components/ButtonComponents/NumberKeys"
import Display from "./components/DisplayComponents/CalculatorDisplay"

const App = () => {
  return (
    <div className='calculator'>
     <div id='top'>
        <Display />
     </div>
     <div id='middle'>  
       <NumberKeys />
       <ActionKeys />
     </div>
     
    
    </div>
  );
};

export default App;
