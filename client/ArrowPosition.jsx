// import React, { Component } from 'react';
// import keydown from 'react-keydown';


// class ArrowPosition extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//     this.arrowPressedDown = this.arrowPressedDown.bind(this);
//     this.arrowReleased = this.arrowReleased.bind(this);
//     }


//     arrowPressedDown(event) {
//       //checks to see what key is pressed down.
//       if (event.charCode === 37) {
//         this.props.toggle('left');

//         } else if (event.charCode === 38) {
//           this.props.toggle('up');
                    
//         } else if (event.charCode === 39) {
//           this.props.toggle('right');

//         } else if (event.charCode === 40) {
//           this.props.toggle('down');
//         }           
//       }

//       arrowReleased(event) {
//         //checks to see when the arrow is released
//         if (event.keyCode === 37) {
//         this.props.toggle('left');

//         } else if (event.charCode === 38) {
//         this.props.toggle('up');
                  
//         } else if (event.charCode === 39) {
//         this.props.toggle('right');

//         } else if (event.charCode === 40) {
//         this.props.toggle('down');
//         } 
//       }

//       render() {

//         return (
//           <div className="arrowDirection" >
//             <input onKeyDown={this.arrowPressedDown} onKeyUp={this.arrowRealeased} tabIndex="0" >Direction</input>
//           </div>
//       )
//     }
//   }

// export default ArrowPosition;