import React from "react";
import styles from "./Modal.module.css";

class Modal extends React.Component {
  componentDidMount = () => {
    window.addEventListener("keydown", this.handleEscape);
  };

  componentWillUnmount = () => {
    window.removeEventListener("keydown", this.handleEscape);
  };

  handleEscape = (e) => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };

  handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  }

  render() {
    return (
      <div className={styles.Overlay} onClick={this.handleBackdropClick}>
        <div className={styles.Modal}>
          <img className={styles.ModalImg} src={this.props.currImg} alt="" />
        </div>
      </div>
    );
  }
}

export default Modal;
