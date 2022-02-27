import React from "react";
import styles from "../styles/Modal.module.css";

const Modal = props => {
    const { className, modalRef } = props;

    return(
        <div ref={modalRef} className={styles.modal}>
            <p>Meu modal!</p>
        </div>
    )
}

export default Modal;