import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { it } from 'vitest';
import FormPage from './FormPage';
import store from 'src/store';
import { Provider } from 'react-redux';

it('should render form', () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <FormPage />
      </Provider>
    </BrowserRouter>
  );
  expect(screen.getByRole('textbox'));
});
