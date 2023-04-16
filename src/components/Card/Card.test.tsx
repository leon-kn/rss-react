import { render, screen } from '@testing-library/react';
import { describe } from 'vitest';
import Card from './Card';
import { Provider } from 'react-redux';
import store from 'src/store';

describe('Card component test', () => {
  const cardImage = 'https://i.dummyjson.com/data/products/2/thumbnail.jpg';
  let image: HTMLImageElement;

  beforeEach(() => {
    render(
      <Provider store={store}>
        <Card id={0} name="Test card" image={cardImage} />
      </Provider>
    );
    image = screen.getByRole('img');
  });

  test('card created', () => {
    expect(image.src).toBe('https://i.dummyjson.com/data/products/2/thumbnail.jpg');
  });
});
