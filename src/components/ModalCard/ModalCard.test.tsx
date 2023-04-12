import { render, screen } from '@testing-library/react';
import { describe, vi } from 'vitest';
import ModalCard from './ModalCard';

const origin = { name: 'string', url: 'string' };
const location = { name: 'Earth', url: 'string' };
const episode = ['1', '2'];

describe('Card component test', () => {
  const modalImage = 'https://i.dummyjson.com/data/products/2/thumbnail.jpg';
  const setState = vi.fn();
  let image: HTMLImageElement;

  beforeEach(() => {
    render(
      <ModalCard
        id={0}
        gender="Male"
        type="string"
        episode={episode}
        name="Test card"
        image={modalImage}
        species="Human"
        location={location}
        origin={origin}
        status="Alive"
        setCharacter={setState}
        url={modalImage}
        created="12.12.2012"
      />
    );
    image = screen.getByAltText('thumbnail');
  });

  test('card created', () => {
    expect(image.src).toBe('https://i.dummyjson.com/data/products/2/thumbnail.jpg');
  });
});
