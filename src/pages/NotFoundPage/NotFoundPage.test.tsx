import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it } from 'vitest';
import NotFoundPage from './NotFoundPage';

describe('Not Found Page', () => {
  it('should render page', () => {
    render(
      <BrowserRouter>
        <NotFoundPage />
      </BrowserRouter>
    );
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Page not Found');
  });
});
