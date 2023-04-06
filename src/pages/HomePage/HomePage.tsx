import Card from 'src/components/Card/Card';
import SearchBar from 'src/components/SearchBar';
import styles from './HomePage.module.css';
import { useEffect, useState } from 'react';
import { HomeApi } from 'src/api';
import { CharacterItem } from 'src/types/CharacterItem';

const HomePage = () => {
  const [characters, setCharacters] = useState<CharacterItem[]>([]);

  useEffect(() => {
    HomeApi.getCharacters().then((data) => setCharacters(data));
  }, []);

  console.log(characters);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Home Page</h2>
      <SearchBar />
      <div className={styles.cards}>
        {characters.map((character) => (
          <Card key={character.id} {...character} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
