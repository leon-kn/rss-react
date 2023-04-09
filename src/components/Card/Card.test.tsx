import { render, screen } from '@testing-library/react';
import { describe, vi } from 'vitest';
import Card from './Card';

describe('Card component test', () => {
  const cardImage = 'https://i.dummyjson.com/data/products/2/thumbnail.jpg';
  const setState = vi.fn();
  let image: HTMLImageElement;

  beforeEach(() => {
    render(<Card id={0} name="Test card" image={cardImage} setCharacter={setState} />);
    image = screen.getByRole('img');
  });

  test('card created', () => {
    expect(image.src).toBe('https://i.dummyjson.com/data/products/2/thumbnail.jpg');
  });
});
