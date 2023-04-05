import { it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Modal from './Modal';

it('should show modal window', () => {
  render(<Modal />);
  expect(screen.getByText('Data has been saved'));
});
