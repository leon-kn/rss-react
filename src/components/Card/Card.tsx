import './Card.css';

import { Component } from 'react';
import { ProductItem } from 'src/types/ProductItem';

class Card extends Component<ProductItem, object> {
  render() {
    return (
      <div className="card">
        <h3>{this.props.title}</h3>
        <img src={this.props.thumbnail} alt="thumbnail" />
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default Card;
