import React, { Component} from 'react';
import ArrowPosition from './ArrowPosition.jsx'
//import { render } from 'react-dom';
//import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      up: false,
      down: false,
      left: false,
      right: false
    };
  }

  render() {
    let arrowDirection = 'no key pressed'

    if (this.state.up === true) {
      arrowDirection = 'Up';

      <ArrowPosition up={this.state.up}>{arrowDirection}</ArrowPosition>
    };

    if (this.state.down === true) {
      arrowDirection = 'Down';

      <ArrowPosition up={this.state.down}>{arrowDirection}</ArrowPosition>
    };

    if (this.state.left === true) {
      arrowDirection = 'Left';

      <ArrowPosition up={this.state.lefts}>{arrowDirection}</ArrowPosition>
    };

    if (this.state.right === true) {
      arrowDirection = 'Right';

      <ArrowPosition up={this.state.rights}>{arrowDirection}</ArrowPosition>
    };

    return (
      <div className="app">
        <h1>Arrow Direction</h1>
        <main className="arrowDirection">{arrowDirection}</main>
      </div>
    )
  }
}





// class App extends Component{
//   render(){
//     return(
//       <div className="App">
//         <h1> Hello, World! </h1>
//       </div>
//     );
//   }
// }

export default App;