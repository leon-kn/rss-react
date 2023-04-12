import { it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import SearchBar from './SearchBar';

const mock = {
  inputValue: 'string',
  setInput: vi.fn(),
  setCharacters: vi.fn(),
  setIsFetching: vi.fn(),
};

it('should show search bar', () => {
  render(<SearchBar {...mock} />);
  expect(screen.getByRole('textbox'));
});
