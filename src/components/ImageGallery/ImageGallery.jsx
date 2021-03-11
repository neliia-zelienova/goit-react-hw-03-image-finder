import React from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import styles from "./ImageGallery.module.css";

class ImageGallery extends React.Component {

  render() {
    return (
      <ul className={styles.ImageGallery}>
        {this.props.images.map(({ id, webformatURL, largeImageURL }) => (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            onClick={this.props.onClick}
          ></ImageGalleryItem>
        ))}
      </ul>
    );
  }
}
export default ImageGallery;
