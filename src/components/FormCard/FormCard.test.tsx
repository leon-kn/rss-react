import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import FormCard from './FormCard';

const card = {
  name: 'John',
  birthday: '11-11-1991',
  country: 'France',
  gender: 'Male',
  avatar: (window.URL.createObjectURL = vi.fn()),
};

test('should show card', () => {
  render(<FormCard {...card} />);
  expect(screen.getByText('Name: John'));
});
