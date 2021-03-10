import "./App.css";
import React from "react";
import Searchbar from "./components/Searchbar";
import Container from "./components/Container";
import ImageGallery from "./components/ImageGallery";
import Button from "./components/Button";
import getImages from "./utils/ApiServices";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

class App extends React.Component {
  state = {
    images: [],
    currentPage: 1,
    currentQuery: "",
    needLoader: false,
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
    console.log('handleSearchSubmit', this.state.needLoader);
    this.setState({
      currentQuery: value,
      currentPage: 1,
      images: [],
    });
  };

  fetchImages = () => {
    this.setState({ needLoader: true });
    const { currentQuery, currentPage } = this.state;

    getImages(currentQuery, currentPage).then((data) => {
      console.log('fetchImages', this.state.needLoader);
      this.setState((prevState) => ({
        images: [...prevState.images, ...data],
        currentPage: prevState.currentPage + 1,
        needLoader: false,
      }
      ));
    });
  };

  handleLoadMore = () => {
    console.log('handleLoadMore', this.state.needLoader);
    this.fetchImages();
  };

  render() {
    const needLoadMoreBtn = this.state.images.length !== 0;
    return (
      <Container>
        <Searchbar onSubmit={this.handleSearchSubmit} />
        {this.setState.needLoader && (
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000} //3 secs
          />
        )}
        <ImageGallery images={this.state.images} />
        {needLoadMoreBtn && <Button onLoadMore={this.handleLoadMore} />}
      </Container>
    );
  }
}

export default App;
