import React from "react";
import ImageGalleryItem from "./ImageGalleryItem";

const ImageGallery = ({ images, onClick }) => {
  return (
    <ul>
      {images.map(({ id, webformatURL }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
        ></ImageGalleryItem>
      ))}
    </ul>
  );
};
export default ImageGallery;
