import React, { Component } from "react";
import {Gallery_item, Gallery_image} from './ImageGalleryItem.styled'
export class ImageGalleryItem extends Component {


  render() {
    const {webformatURL, largeImageURL, hendlOpenModal} = this.props
    return (<>
      {
  <Gallery_item onClick={() => hendlOpenModal(largeImageURL)}>
  <Gallery_image src={webformatURL} alt=""/>
</Gallery_item>
}      
    </>)
      ;
  }
}