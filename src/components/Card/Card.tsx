import { CharacterItem } from 'src/types/CharacterItem';
import styles from './Card.module.css';
import { HomeApi } from 'src/api';

interface ICard extends CharacterItem {
  setCharacter: React.Dispatch<React.SetStateAction<CharacterItem | null>>;
}

const Card = ({ id, name, image, setCharacter }: ICard) => {
  const handleClick = () => {
    HomeApi.getCharacter(id).then((data) => {
      setCharacter(data);
    });
  };

  return (
    <div className={styles.card} onClick={handleClick}>
      <img className={styles.card__image} src={image} alt="thumbnail" />
      <h4 className={styles.card__title}>{name}</h4>
    </div>
  );
};

export default Card;
