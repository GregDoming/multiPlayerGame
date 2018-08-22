import React, { Component } from 'react';
import { render } from 'react-dom';
//import { subcribeToTimer } from './api';
//import ArrowPosition from './ArrowPosition';
//import keydown from 'react-keydown';
//import { render } from 'react-dom';
//import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    
    this.state = {
      up: false,
      down: false,
      lefts: false,
      rights: false,
      timestamp: 'no timestamp yet',
      arrowDirection: 'No Direction'
    };
    // this.toggle = this.toggle.bind(this);
    // this.arrowRealeased = this.arrowReleased.bind(this);
    // this.arrowPressedDown = this.arrowPressedDown.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  // subscribeToTimer(err, timestamp) {
  //   this.setState({timestamp})
  // }
  


  handleKeyDown(event) {

    if (event.keyCode === 37) this.setState({arrowDirection: 'left' });

    if (event.keyCode === 38) this.setState({arrowDirection: 'up' });

    if (event.keyCode === 39) this.setState({arrowDirection: 'right' });

    if (event.keyCode === 40) this.setState({arrowDirection: 'down' });

    }

  handleKeyUp(event) {

    if (event.keyCode === 37) this.setState({arrowDirection: 'No Input' });

    if (event.keyCode === 38) this.setState({arrowDirection: 'No Input' });
  
    if (event.keyCode === 39) this.setState({arrowDirection: 'No Input' });
  
    if (event.keyCode === 40) this.setState({arrowDirection: 'No Input' });
   
    }
  

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
    document.addEventListener('keyup', this.handleKeyUp);
  }
  
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  render() {

return (
  <div className="app">
    <h1>Arrow Direction</h1>
    <div>{this.state.arrowDirection}</div>
  </div>
)
}
}


render(<App />, document.getElementById('content'))


export default App

  // arrowPressedDown(event) {
  //   //checks to see what key is pressed down.
  //   if (event.charCode === 37) {
  //     this.props.toggle('lefts');

  //     } else if (event.charCode === 38) {
  //       this.props.toggle('up');
                  
  //     } else if (event.charCode === 39) {
  //       this.props.toggle('rights');

  //     } else if (event.charCode === 40) {
  //       this.props.toggle('down');
  //     }           
  //   }

    // arrowReleased(event) {
    //   //checks to see when the arrow is released
    //   if (event.keyCode === 37) {
    //   this.props.toggle('lefts');

    //   } else if (event.charCode === 38) {
    //   this.props.toggle('up');
                
    //   } else if (event.charCode === 39) {
    //   this.props.toggle('rights');

    //   } else if (event.charCode === 40) {
    //   this.props.toggle('down');
    //   } 
    // }

  // toggle(keyDirection) {
  //   //function to check if key was pressed up or down and to toggle its value in state.
  //   if (keyDirection === 'lefts' && this.state.lefts === false) {
  //     this.setState({lefts: true});

  //   } else if (keyDirection === 'up' && this.state.up === false) {
  //     this.setState({up: true});
      
  //   } else if (keyDirection === 'rights' && this.state.rights === false) {
  //     this.setState({rights: true});

  //   } else if (keyDirection === 'down' && this.state.down === false) {
  //     this.setState({down: true});

  //   } else if (keyDirection === 'lefts' && this.state.lefts === true) {
  //     this.setState({lefts: false});

  //   } else if (keyDirection === 'up' && this.state.up === true) {
  //     this.setState({up: false});
      
  //   } else if (keyDirection === 'rights' && this.state.rights === true) {
  //     this.setState({rights: false});
  
  //   } else if (keyDirection === 'down' && this.state.down === true) {
    //     this.setState({down: false});
    
  //   }
  // }

    //renders arrow position to page
    // let arrowDirection = 'greg'

    // if (this.state.up === true) {
    //   arrowDirection = 'Up';

    //   return <div up={this.state.up}>{arrowDirection}</div>
    // } else if (this.state.down === true) {
    //   arrowDrequire('dotenv').config();

    //   returnrequire('dotenv').config();toggle={this.toggle}>{arrowDirection}</div>
    // } else irequire('dotenv').config(); {
    //   arrowDrequire('dotenv').config();

    //   returnrequire('dotenv').config(); toggle={this.toggle}>{arrowDirection}</div>
    // } else irequire('dotenv').config();) {
    //   arrowDrequire('dotenv').config();

    //   returnrequire('dotenv').config();s} toggle={this.toggle}>{arrowDirection}</div>
    // } else {require('dotenv').config();
    //   arrowDirection = 'no key pressed';
      
    // }





// class App extends Component{
//   render(){
//     return(
//       <div className="App">
//         <h1> Hello, World! </h1>
//       </div>
//     );
//   }
// }
