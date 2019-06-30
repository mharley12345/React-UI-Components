import React,{Component} from 'react';
import './index.css';

import ActionKeys from "./components/ButtonComponents/ActionKeys"
import NumberKeys from "./components/ButtonComponents/NumberKeys"
import Display from "./components/DisplayComponents/CalculatorDisplay"

class App extends Component {
  constructor(){
    super();
    this.state={
      result: ""
    }
  }
  onClick = button => {
    if(button === "="){
      this.calculate()
    }
       else if(button === "clear"){
         this.backspace()
    }
       else{
         this.setState({
           result:this.state.result + button
         })
       }
    };

    calculate = () => {
      try {
        this.setState({
          //eslint-disable-next-line
          result: (eval(this.state.result) || "" ) + ""

        })
      } catch (e){
        this.setState({
          result: "error"
        })
      }
    };

    backspace = () => {
      this.setState({
        result: this.state.result.slice(0, -1)
      })
    };
  render(){
  return (
    <div className='calculator'>
     <div id='top'>
        <Display result={this.state.result}/>
     </div>
     <div id='middle'>
       <NumberKeys onClick={this.onClick}/>
       <ActionKeys onClick={this.onClick} />
     </div>


    </div>
  );
}
}

export default App;
