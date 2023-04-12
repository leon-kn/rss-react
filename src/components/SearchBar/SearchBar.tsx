import React from 'react';
import { useEffect, useRef } from 'react';
import { HomeApi } from 'src/api';
import { useAppDispatch } from 'src/hooks/redux';
import { setIsFetch } from 'src/store/reducers/CharacterSlice';
import { CharacterItem } from 'src/types/CharacterItem';

interface ISearchBar {
  inputValue: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  setCharacters: React.Dispatch<React.SetStateAction<CharacterItem[]>>;
}

const SearchBar = ({ inputValue, setCharacters }: ISearchBar) => {
  const inputRef = useRef(inputValue);
  const dispatch = useAppDispatch();

  useEffect(() => {
    return () => {
      localStorage.setItem('value', inputRef.current);
    };
  }, []);

  const handleRequest = (key: string, value: string) => {
    if (key === 'Enter') {
      inputRef.current = value;
      if (inputRef.current) {
        dispatch(setIsFetch(true));
        HomeApi.searchCharacters(inputRef.current).then((data) => {
          dispatch(setIsFetch(false));
          setCharacters(data);
          console.log('then');
        });
      } else {
        dispatch(setIsFetch(true));
        HomeApi.getAllCharacters().then((data) => {
          dispatch(setIsFetch(false));
          setCharacters(data);
        });
      }
    }
  };

  const handleClick = (value: string) => {
    inputRef.current = value;
    localStorage.setItem('value', inputRef.current);
  };

  return (
    <input
      type="text"
      name="text"
      defaultValue={inputValue}
      placeholder="Search field"
      onChange={(e) => handleClick(e.target.value)}
      onKeyDown={(e) => handleRequest(e.key, e.currentTarget.value)}
    />
  );
};

export default SearchBar;
