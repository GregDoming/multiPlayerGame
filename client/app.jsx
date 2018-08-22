import React, { Component} from "react";
//import { render } from 'react-dom';
//import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.up = this.up.bind(this);
    this.down = this.down.bind(this);
    this.lefts = this.lefts.bind(this);
    this.rights = this.rights.bind(this);

    this.state = {
      up: false,
      down: false,
      left: false,
      right: false
    }
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