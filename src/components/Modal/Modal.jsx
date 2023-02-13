import React, { Component } from "react";
import { Overlay, Modalka } from './Modal.styled'
export class Modal extends Component {

  componentDidMount() {
   
      window.addEventListener("keydown", this.handlKeyDown);
  }

  componentWillUnmount() {
    
      window.removeEventListener("keydown", this.handlKeyDown);
  }    
  
  handlKeyDown = event => {
     console.log(event.code)
      if (event.code === "Escape") {
        this.props.hendlCloseModal();
      }
    };
  
  handlBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.hendlCloseModal();
    }
  }
  
  render() {
    return (
      <>
        <div>
          <Overlay onClick={this.handlBackdropClick}>
  <Modalka>
    {this.props.children}
  </Modalka>
        </Overlay>

        </div>
            </>
    );
  }
}