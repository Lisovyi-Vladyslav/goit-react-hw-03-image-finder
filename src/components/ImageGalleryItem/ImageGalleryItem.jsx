import React, { Component } from "react";
import PropTypes from "prop-types";

import { GalleryItem, GalleryImage } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {


  render() {
    const {webformatURL, largeImageURL, hendlOpenModal} = this.props
    return (<>
      {
  <GalleryItem onClick={() => hendlOpenModal(largeImageURL)}>
  <GalleryImage src={webformatURL} alt=""/>
</GalleryItem>
}      
    </>)
      ;
  }
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
   largeImageURL: PropTypes.string.isRequired,
   hendlOpenModal: PropTypes.func.isRequired,
};

