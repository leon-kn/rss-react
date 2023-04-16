import { Provider } from 'react-redux';
import SearchBar from './SearchBar';
import store from 'src/store';
import { fireEvent, render } from '@testing-library/react';
import { setInput } from 'src/store/reducers/CharacterSlice';
import { spyOn } from 'jest-mock';

describe('SearchBar component', () => {
  it('dispatches the correct action on input change', () => {
    const dispatch = spyOn(store, 'dispatch');
    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );

    const input = getByPlaceholderText('Search field') as HTMLInputElement;
    const inputValue = 'test input value';

    fireEvent.change(input, { target: { value: inputValue } });

    expect(dispatch).toHaveBeenCalledWith(setInput(inputValue));
  });
});
