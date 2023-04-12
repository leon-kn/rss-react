import { FormItem } from 'src/types/FormItem';
import styles from './FormCard.module.css';

const FormCard = (props: FormItem) => {
  return (
    <div className={styles.card}>
      <img className={styles.card__image} src={props.avatar} alt="avatar" />
      <h3>Name: {props.name}</h3>
      <p>Birthday: {props.birthday.split('-').reverse().join('.')}</p>
      <p>Country: {props.country}</p>
      <p>Gender: {props.gender}</p>
    </div>
  );
};

export default FormCard;
