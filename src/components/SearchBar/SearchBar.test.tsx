import { it } from 'vitest';
import { render, screen } from '@testing-library/react';
import SearchBar from './SearchBar';

it('should show search bar', () => {
  render(<SearchBar />);
  expect(screen.getByRole('textbox'));
});
