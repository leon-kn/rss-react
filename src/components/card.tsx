import { Component } from 'react';
import { ProductItem } from 'types/ProductItem';

export default class Card extends Component<ProductItem, object> {
  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <img src={this.props.thumbnail} alt="thumbnail" />
        <p>{this.props.description}</p>
      </div>
    );
  }
}
