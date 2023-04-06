import Card from 'src/components/Card/Card';
import SearchBar from 'src/components/SearchBar';
import data from 'src/assets/data';
import styles from './HomePage.module.css';
import { FilmItem } from 'src/types/FilmItem';
import { useEffect, useState } from 'react';
import { HomeApi } from 'src/api';

const HomePage = () => {
  const [films, setFilms] = useState<FilmItem[]>([]);

  useEffect(() => {
    HomeApi.getTopFilms(0).then((data) => setFilms(data));
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Home Page</h2>
      <SearchBar />
      <div className={styles.cards}>
        {data.products.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
