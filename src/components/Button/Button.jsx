import React, { Component } from "react";
import {Load_more, Load_more_conteiner} from './Button.styled'
export class Button extends Component {

  render() {
    return (
      <Load_more_conteiner>
        <Load_more onClick={this.props.loadMore}>Load more</Load_more>
</Load_more_conteiner>
      
    );
  }
}