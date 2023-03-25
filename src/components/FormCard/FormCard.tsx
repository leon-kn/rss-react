import { Component } from 'react';
import { FormItem } from 'src/types/FormItem';
import styles from './FormCard.module.css';

type StateType = Record<string, never>;
export default class FormCard extends Component<FormItem, StateType> {
  render() {
    return (
      <div className={styles.card}>
        <img
          className={styles.card__image}
          src={URL.createObjectURL(this.props.avatar)}
          alt="avatar"
        />
        <h3>Name: {this.props.name}</h3>
        <p>Birthday: {this.props.birthday.split('-').reverse().join('.')}</p>
        <p>Country: {this.props.country}</p>
        <p>Gender: {this.props.gender}</p>
      </div>
    );
  }
}
