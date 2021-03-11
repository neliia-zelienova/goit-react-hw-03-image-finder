import React from 'react';
import styles from "./ImageGalleryItem.module.css";

class ImageGalleryItem extends React.Component {
  
  handleImgClick = () => {
    this.props.onClick(this.props.largeImageURL);
  }

  render() {
    return (
      <li className={styles.ImageGalleryItem} onClick={this.handleImgClick}>
        <img
          src={this.props.webformatURL}
          alt=""
          className={styles.ImageGalleryItem__image}
        />
      </li>
    );

  }
}

export default ImageGalleryItem;