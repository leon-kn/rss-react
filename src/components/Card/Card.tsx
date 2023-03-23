import { Component } from 'react';
import { ProductItem } from 'src/types/ProductItem';
import styles from './Card.module.css';
class Card extends Component<ProductItem, object> {
  render() {
    return (
      <div className={styles.card}>
        <h3>{this.props.title}</h3>
        <img src={this.props.thumbnail} alt="thumbnail" />
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default Card;
