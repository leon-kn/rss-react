import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import Card from './Card';

test('should show card', () => {
  render(
    <Card
      id={0}
      title="Test Card"
      description="test description"
      thumbnail="https://i.dummyjson.com/data/products/2/thumbnail.jpg"
    />
  );
  expect(screen.getByText('Test Card'));
});
