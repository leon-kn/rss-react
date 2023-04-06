import { CharacterItem } from 'src/types/CharacterItem';
import styles from './Card.module.css';

const Card = ({ name, status, species, image, location, origin, url }: CharacterItem) => {
  return (
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
  );
};

export default Card;
