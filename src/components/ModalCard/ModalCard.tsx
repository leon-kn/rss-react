import { CharacterItem } from 'src/types/CharacterItem';
import styles from './ModalCard.module.css';
import closer from 'src/assets/closer.jpg';

interface IModalCard extends CharacterItem {
  setCharacter: React.Dispatch<React.SetStateAction<CharacterItem | null>>;
}

const ModalCard = ({
  name,
  image,
  species,
  location,
  origin,
  status,
  setCharacter,
}: IModalCard) => {
  const handleClose = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (event.target === event.currentTarget) {
      setCharacter(null);
    }
  };

  return (
    <div className={styles.modal__layout} onClick={handleClose}>
      <div className={styles.modal__content}>
        <img className={styles.modal__closer} src={closer} onClick={handleClose} />
        <div className={styles.card}>
          <img className={styles.card__image} src={image} alt="thumbnail" />
          <h4 className={styles.card__title}>{name}</h4>
          <p className={styles.card__description}>
            <span className={styles.card__descriptionTitle}>Species:</span>
            {species}
          </p>
          <p className={styles.card__description}>
            <span className={styles.card__descriptionTitle}>Location:</span>
            {location.name}
          </p>
          <p className={styles.card__description}>
            <span className={styles.card__descriptionTitle}>Origin:</span>
            {origin.name}
          </p>
          <p className={styles.card__description}>
            <span className={styles.card__descriptionTitle}>Status:</span>
            {status}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ModalCard;
