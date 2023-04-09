import Card from 'src/components/Card/Card';
import SearchBar from 'src/components/SearchBar';
import styles from './HomePage.module.css';
import { useEffect, useState } from 'react';
import { HomeApi } from 'src/api';
import { CharacterItem } from 'src/types/CharacterItem';
import loader from 'src/assets/loading.gif';
import ModalCard from 'src/components/ModalCard/ModalCard';

const HomePage = () => {
  const [input, setInput] = useState<string>(localStorage.getItem('value') || '');
  const [characters, setCharacters] = useState<CharacterItem[]>([]);
  const [character, setCharacter] = useState<CharacterItem | null>(null);
  const [isFetching, setIsFetching] = useState<boolean>(true);

  useEffect(() => {
    if (!input) {
      HomeApi.getAllCharacters().then((data) => {
        setIsFetching(false);
        setCharacters(data);
      });
    } else {
      HomeApi.searchCharacters(input).then((data) => {
        setIsFetching(false);
        setCharacters(data);
      });
    }
  }, [input]);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Home Page</h2>
      <SearchBar
        inputValue={input}
        setInput={setInput}
        setCharacters={setCharacters}
        setIsFetching={setIsFetching}
      />
      <div className={styles.cards}>
        {characters.length ? (
          characters.map((character) => (
            <Card
              key={character.id}
              id={character.id}
              name={character.name}
              image={character.image}
              setCharacter={setCharacter}
            />
          ))
        ) : isFetching ? (
          <img src={loader} />
        ) : (
          <h1>Characters are not found</h1>
        )}
      </div>
      {character ? <ModalCard {...character} setCharacter={setCharacter} /> : null}
    </div>
  );
};

export default HomePage;
