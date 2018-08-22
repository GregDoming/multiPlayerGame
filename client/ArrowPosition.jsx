import React, { Component } from 'react';


class ArrowDirection extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.arrowPressedDown = this.arrowPressedDown.bind(this);
    }


    arrowPressedDown(event) {
        if (event.charCode === 37) {

        } else if (event.charCode === 38) {
            
        } else if (event.charCode === 39) {

        } else if (event.charCode === 40) {

        } else {

        }     
    }
    render() {

      return (
        <div className="arrowDirection" onKeyDown={this.upArrowPressedDown}>
          {arrowKeyDirection}
        </div>
    )
  }
}









export default ArrowPosition;