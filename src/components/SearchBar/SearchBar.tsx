import { FC } from 'react';
import { useAppDispatch, useAppSelector } from 'src/hooks/redux';
import { setInput } from 'src/store/reducers/CharacterSlice';

const SearchBar: FC = () => {
  const { input } = useAppSelector((state) => state.characterReducer);
  const dispatch = useAppDispatch();

  return (
    <input
      type="text"
      name="text"
      defaultValue={input}
      placeholder="Search field"
      onChange={(e) => dispatch(setInput(e.target.value))}
    />
  );
};

export default SearchBar;
