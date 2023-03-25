import styles from './Modal.module.css';

const Modal = () => {
  return (
    <div className={styles.modal}>
      <div className={styles.modal__content}>
        <p className={styles.modal__text}>Data has been saved</p>
      </div>
    </div>
  );
};

export default Modal;
