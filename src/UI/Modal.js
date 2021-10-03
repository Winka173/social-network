import React from "react";
import styles from "./Modal.module.css";
import reactDom from "react-dom";

const Backdrop = () => {
  return <div className={styles.backdrop} />;
};

const ModalOverlay = ({ children }) => {
  return <div className={styles.modal}>{children}</div>;
};

const Modal = ({ children }) => {
  return (
    <React.Fragment>
      {reactDom.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-root")
      )}
      {reactDom.createPortal(
        <ModalOverlay children={children} />,
        document.getElementById("modal-root")
      )}
    </React.Fragment>
  );
};

export default Modal;
