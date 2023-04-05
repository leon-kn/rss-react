import { useEffect, useRef, useState } from 'react';

const SearchBar = () => {
  const [input, setInput] = useState(localStorage.getItem('value') || '');
  const inputRef = useRef(input);

  const setInputValue = (value: string) => {
    setInput(value);
    inputRef.current = value;
  };

  useEffect(() => {
    return () => {
      localStorage.setItem('value', inputRef.current);
    };
  }, []);

  return (
    <input
      type="text"
      name="text"
      defaultValue={input}
      placeholder="Search field"
      onChange={(e) => {
        setInputValue(e.currentTarget.value);
      }}
    />
  );
};

export default SearchBar;
