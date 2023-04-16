import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'src/store';

describe('Home Page', () => {
  it('Render Home Page', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <HomePage />
        </Provider>
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
        <Provider store={store}>
          <HomePage />
        </Provider>
      </BrowserRouter>
    );
    expect(screen.getByRole('textbox'));
  });
});
