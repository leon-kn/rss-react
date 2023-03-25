import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { it } from 'vitest';
import FormPage from './FormPage';

it('should render form', () => {
  render(
    <BrowserRouter>
      <FormPage />
    </BrowserRouter>
  );
  expect(screen.getByRole('textbox'));
});
