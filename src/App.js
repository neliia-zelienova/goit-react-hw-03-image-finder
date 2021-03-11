import "./App.css";
import React from "react";
import Searchbar from "./components/Searchbar/Searchbar";
import Container from "./components/Container";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Button from "./components/Button/Button";
import getImages from "./utils/ApiServices";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import Modal from "./components/Modal";

class App extends React.Component {
  state = {
    images: [],
    currentPage: 1,
    currentQuery: "",
    needLoader: false,
    showModal: false,
    modalImg: "",
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentQuery !== this.state.currentQuery) {
      this.fetchImages();
    }
    if (
      prevState.images.length !== 0 &&
      prevState.images !== this.state.images
    ) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  }

  handleSearchSubmit = (value) => {
    this.setState({
      currentQuery: value,
      currentPage: 1,
      images: [],
    });
  };

  fetchImages = () => {
    this.setState({ needLoader: true });
    const { currentQuery, currentPage } = this.state;

    getImages(currentQuery, currentPage)
      .then((data) => {
        this.setState((prevState) => ({
          images: [...prevState.images, ...data],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .catch((error) => console.log(error))
      .finally(this.setState({ needLoader: false }));
  };

  handleLoadMore = () => {
    this.fetchImages();
  };

  toggleModal = (img) => {
    this.setState((prevState) => ({
      showModal: !prevState.showModal,
      modalImg: img,
    }));
  };

  render() {
    const needLoadMoreBtn = this.state.images.length !== 0;
    return (
      <>
        {this.state.showModal && (
          <Modal currImg={this.state.modalImg} onClose={this.toggleModal} />
        )}
        <Container>
          <Searchbar onSubmit={this.handleSearchSubmit} />
          <ImageGallery images={this.state.images} onClick={this.toggleModal} />
          {this.state.needLoader && (
            <Loader
              type="ThreeDots"
              color="#DCDCDC"
              height={100}
              width={100}
              timeout={3000} //3 secs
            />
          )}
          {needLoadMoreBtn && <Button onLoadMore={this.handleLoadMore} />}
        </Container>
      </>
    );
  }
}

export default App;
