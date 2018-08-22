import React, { Component } from 'react';


class ArrowDirection extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.arrowPressedDown = this.arrowPressedDown.bind(this);
    }


    arrowPressedDown(event) {
        if (event.charCode === 37) {
          this.props.toggle('left');

        } else if (event.charCode === 38) {
          this.props.toggle('up');
                    
        } else if (event.charCode === 39) {
          this.props.toggle('right');

        } else if (event.charCode === 40) {
          this.props.toggle('down');

        } else {

        }     
    }
    render() {

      return (
        <div className="arrowDirection" onKeyDown={this.arrowPressedDown} onKeyUp={this.arrowUp} ></div>
    )
  }
}









export default ArrowPosition;