import React from "react";
import styles from "./Searchbar.module.css";

class Searchbar extends React.Component {
  state = {
    value: "",
  };

  handleInput = (e) => {
    this.setState({
      value: e.currentTarget.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
  };

  render() {
    return (
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm}>
          <button
            type="submit"
            className={styles.SearchForm__button}
            onClick={this.handleSubmit}
          >
            <span className={styles.SearchForm__button__label}>Search</span>
          </button>

          <input
            className={styles.SearchForm__input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleInput}
          />
        </form>
      </header>
    );
  }
}
export default Searchbar;
