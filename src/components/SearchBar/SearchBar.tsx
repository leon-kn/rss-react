import React from 'react';
import { useEffect, useRef } from 'react';
import { HomeApi } from 'src/api';
import { CharacterItem } from 'src/types/CharacterItem';

interface ISearchBar {
  inputValue: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  setCharacters: React.Dispatch<React.SetStateAction<CharacterItem[]>>;
  setIsFetching: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchBar = ({ inputValue, setCharacters, setIsFetching }: ISearchBar) => {
  const inputRef = useRef(inputValue);

  useEffect(() => {
    return () => {
      localStorage.setItem('value', inputRef.current);
    };
  }, []);

  const handleRequest = (key: string, value: string) => {
    if (key === 'Enter') {
      inputRef.current = value;
      if (inputRef.current) {
        setIsFetching(true);
        HomeApi.searchCharacters(inputRef.current).then((data) => {
          setIsFetching(false);
          setCharacters(data);
        });
      } else {
        setIsFetching(true);
        HomeApi.getAllCharacters().then((data) => {
          setIsFetching(false);
          setCharacters(data);
        });
      }
    }
  };

  return (
    <input
      type="text"
      name="text"
      defaultValue={inputValue}
      placeholder="Search field"
      onKeyDown={(e) => handleRequest(e.key, e.currentTarget.value)}
    />
  );
};

export default SearchBar;
