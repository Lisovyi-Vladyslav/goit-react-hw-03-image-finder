import axios from 'axios';
import React, { Component } from "react";
import PropTypes from "prop-types";

import { Gallery, GalleryItem } from "./ImageGallery.styled"

import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem'
import { Loader } from '../Loader/Loader'
import { Modal } from '../Modal/Modal'
import { Button } from '../Button/Button'

export class ImageGallery extends Component {
state = {
  isLoading: false,
  photos: [],
  openModal: false,
  largeImageURL: null,
  page: 1,
  totalHits: 0,
  }
  
  hendlOpenModal = (largeImageURL) => {
        this.setState({largeImageURL: largeImageURL ,openModal: true})
  }

  hendlCloseModal = () => {
this.setState({openModal: false})
  }
  
  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }))
  
}

  fetchData = async (currentSearcPhoto, page) => {
    this.setState({ isLoading: true });



    try {
       const ulr = `https://pixabay.com/api/?q=${currentSearcPhoto}&page=${page}&key=31729330-76a93a375c4da5def12e352a3&image_type=photo&orientation=horizontal&per_page=12`;
      
      const photo = await axios.get(ulr);
      console.log(photo.data.hits);
      console.log(this.state.photos.length)
      console.log(photo.data);
      this.setState({ totalHits: photo.data.totalHits});
       if (page === 1) {
       this.setState({ page: 1, photos: [] });
    }
      this.setState(prevState => ({ photos: prevState.photos.concat(photo.data.hits) }));
     } catch (error) {
       console.log(error)
     } finally {
       this.setState({isLoading: false});
    }
  }
  
componentDidUpdate(prevProps, prevState) {
    const prevSearcPhoto = prevProps.searcPhoto.search;
    const currentSearcPhoto = this.props.searcPhoto.search;
   
   
 
  if (prevSearcPhoto !== currentSearcPhoto) {
    this.fetchData(currentSearcPhoto, 1);
  }
  if (this.state.page !== prevState.page) {
    this.fetchData(currentSearcPhoto, this.state.page);
  }
}

  render() {
   const {photos, isLoading, openModal,largeImageURL, totalHits} = this.state
    return (
    <>
        <Gallery>{
        photos.map(({ id, webformatURL, largeImageURL }) => (
          <ImageGalleryItem key={id} webformatURL={webformatURL} largeImageURL={largeImageURL} hendlOpenModal={this.hendlOpenModal}></ImageGalleryItem>
        ))
         
        }
            
    </Gallery>
        {isLoading && <Loader/>}
        {openModal && <Modal hendlCloseModal={this.hendlCloseModal}>
        <GalleryItem src={largeImageURL} alt="" />
        </Modal>}
        
        {photos.length !== 0 && photos.length !== totalHits && <Button  loadMore={this.loadMore}/>}
    </>);
  }
}

ImageGallery.propTypes = {
 searcPhoto: PropTypes.objectOf(PropTypes.string),
};
