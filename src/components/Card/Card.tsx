import { Component } from 'react';
import { ProductItem } from 'src/types/ProductItem';
import styles from './Card.module.css';
class Card extends Component<ProductItem, object> {
  render() {
    return (
      <div className={styles.card}>
        <h3 className={styles.card__title}>{this.props.title}</h3>
        <img className={styles.card__image} src={this.props.thumbnail} alt="thumbnail" />
        <p className={styles.card__description}>{this.props.description}</p>
      </div>
    );
  }
}

export default Card;
