import React, { Component } from "react";
import {LoadMore, LoadMoreConteiner} from './Button.styled'

export class Button extends Component {
  render() {
    return (
      <>
       <LoadMoreConteiner>
        <LoadMore onClick={this.props.loadMore} >Load more</LoadMore>
        </LoadMoreConteiner>
      </>
      
    );
  }
}