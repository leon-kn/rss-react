import { FilmItem } from 'src/types/FilmItem';
import styles from './Card.module.css';
const Card = ({ nameRu, year, posterUrlPreview, filmLength, rating }: FilmItem) => {
  return (
    <div className={styles.card}>
      <img className={styles.card__image} src={posterUrlPreview} alt="thumbnail" />
      <h4 className={styles.card__title}>{nameRu}</h4>
      <p className={styles.card__description}>
        <span className={styles.card__descriptionTitle}>Rating:</span>
        {rating}
      </p>
      <p className={styles.card__description}>
        <span className={styles.card__descriptionTitle}>Year:</span>
        {year}
      </p>
      <p className={styles.card__description}>
        <span className={styles.card__descriptionTitle}>Length:</span>
        {filmLength}
      </p>
    </div>
  );
};

export default Card;
