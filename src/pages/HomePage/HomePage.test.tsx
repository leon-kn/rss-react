import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';
import { BrowserRouter } from 'react-router-dom';
import data from 'src/assets/data';

describe('Home Page', () => {
  it('Render Home Page', () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );
    expect(
      screen.getByRole('heading', {
        level: 2,
      })
    ).toHaveTextContent('Home Page');
  });

  it('Render search bar', () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );
    expect(screen.getByRole('textbox'));
  });

  it('Render all cards', () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );
    expect(screen.getAllByAltText('thumbnail').length === data.products.length);
  });
});
