import { render, screen } from '@testing-library/react';
import FormCard from './FormCard';
import { vi } from 'vitest';

const card = {
  name: 'John',
  birthday: '11-11-1991',
  country: 'France',
  gender: 'Male',
  avatar: 'https//img.com/avatar',
  permission: true,
};

test('should show card', () => {
  window.URL.createObjectURL = vi.fn();
  render(<FormCard {...card} />);
  expect(screen.getByText('Name: John'));
});
