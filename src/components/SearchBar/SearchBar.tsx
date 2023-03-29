import { useEffect, useState } from 'react';

const SearchBar = () => {
  const [input, setInput] = useState(
    localStorage.getItem('value') ? localStorage.getItem('value')! : ''
  );

  useEffect(() => {
    console.log('useEffect');
    return () => {
      console.log('useEffectReset');
      localStorage.setItem('value', input);
    };
  }, [input]);

  console.log('render');

  return (
    <input
      type="text"
      name="text"
      value={input}
      onChange={(e) => {
        setInput(e.target.value);
      }}
    />
  );
};

export default SearchBar;
