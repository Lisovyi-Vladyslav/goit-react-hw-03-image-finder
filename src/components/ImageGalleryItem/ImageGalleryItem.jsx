import React, { Component } from "react";
import {GalleryItem, GalleryImage} from './ImageGalleryItem.styled'
export class ImageGalleryItem extends Component {


  render() {
    const {webformatURL, largeImageURL, hendlOpenModal} = this.props
    return (<>
      {
  <GalleryImage onClick={() => hendlOpenModal(largeImageURL)}>
  <GalleryItem src={webformatURL} alt=""/>
</GalleryImage>
}      
    </>)
      ;
  }
}