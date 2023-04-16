import { fetchCharacterThunk } from 'src/store/reducers/thunks';
import { FC } from 'react';
import styles from './Card.module.css';
import { useAppDispatch } from 'src/hooks/redux';

interface ICard {
  id: number;
  name: string;
  image: string;
}

const Card: FC<ICard> = ({ id, name, image }) => {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(fetchCharacterThunk(id));
  };

  return (
    <div className={styles.card} onClick={handleClick}>
      <img className={styles.card__image} src={image} alt="thumbnail" />
      <h4 className={styles.card__title}>{name}</h4>
    </div>
  );
};

export default Card;
