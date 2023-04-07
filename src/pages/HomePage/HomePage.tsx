import Card from 'src/components/Card/Card';
import SearchBar from 'src/components/SearchBar';
import styles from './HomePage.module.css';
import { useEffect, useState } from 'react';
import { HomeApi } from 'src/api';
import { CharacterItem } from 'src/types/CharacterItem';

const HomePage = () => {
  const [input, setInput] = useState<string>(localStorage.getItem('value') || '');
  const [characters, setCharacters] = useState<CharacterItem[]>([]);

  useEffect(() => {
    if (!input) {
      HomeApi.getAllCharacters().then((data) => setCharacters(data));
    } else {
      HomeApi.searchCharacters(input).then((data) => setCharacters(data));
    }
  }, [input]);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Home Page</h2>
      <SearchBar inputValue={input} setInput={setInput} setCharacters={setCharacters} />
      <div className={styles.cards}>
        {characters.length ? (
          characters.map((character) => <Card key={character.id} {...character} />)
        ) : (
          <h1>Characters are not found</h1>
        )}
      </div>
    </div>
  );
};

export default HomePage;
