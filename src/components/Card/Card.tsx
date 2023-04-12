import { fetchCharacterThunk } from 'src/store/reducers/thunks';
import styles from './Card.module.css';

interface ICard {
  id: number;
  name: string;
  image: string;
}

const Card = ({ id, name, image }: ICard) => {
  const handleClick = () => {
    fetchCharacterThunk(id);
  };

  return (
    <div className={styles.card} onClick={handleClick}>
      <img className={styles.card__image} src={image} alt="thumbnail" />
      <h4 className={styles.card__title}>{name}</h4>
    </div>
  );
};

export default Card;
