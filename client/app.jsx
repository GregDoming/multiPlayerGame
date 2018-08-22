import React, { Component} from 'react';
import ArrowPosition from './ArrowPosition.jsx'
//import { render } from 'react-dom';
//import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this)

    this.state = {
      up: false,
      down: false,
      left: false,
      right: false
    };
  }

  toggle(keyDirection) {
    //function to check if key was pressed up or down and to toggle its value in state.
    if (keyDirection === 'left' && this.state.left === false) {
      this.setState({left: true});

    } else if (keyDirection === 'up' && this.state.up === false) {
      this.setState({up: true});
      
    } else if (keyDirection === 'right' && this.state.right === false) {
      this.setState({right: true});

    } else if (keyDirection === 'down' && this.state.down === false) {
      this.setState({down: true});

    } else if (keyDirection === 'left' && this.state.left === true) {
      this.setState({left: true});

    } else if (keyDirection === 'up' && this.state.up === true) {
      this.setState({up: true});
      
    } else if (keyDirection === 'right' && this.state.right === true) {
      this.setState({right: true});

    } else if (keyDirection === 'down' && this.state.down === true) {
      this.setState({down: true});

    }
  }

  render() {
    let arrowDirection = 'no key pressed'

    if (this.state.up === true) {
      arrowDirection = 'Up';

      <ArrowPosition up={this.state.up}>{arrowDirection}</ArrowPosition>
    };

    if (this.state.down === true) {
      arrowDirection = 'Down';

      <ArrowPosition down={this.state.down} toggle={this.toggle}>{arrowDirection}</ArrowPosition>
    };

    if (this.state.left === true) {
      arrowDirection = 'Left';

      <ArrowPosition left={this.state.lefts} toggle={this.toggle}>{arrowDirection}</ArrowPosition>
    };

    if (this.state.right === true) {
      arrowDirection = 'Right';

      <ArrowPosition right={this.state.rights} toggle={this.toggle}>{arrowDirection}</ArrowPosition>
    };

    return (
      <div className="app">
        <h1>Arrow Direction</h1>
        <main className="arrowDirection" toggle={this.toggle}>{arrowDirection}</main>
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