import Card from 'src/components/Card/Card';
import SearchBar from 'src/components/SearchBar';
import styles from './HomePage.module.css';
import { useEffect } from 'react';
import loader from 'src/static/loading.gif';
import ModalCard from 'src/components/ModalCard/ModalCard';
import { useAppDispatch, useAppSelector } from 'src/hooks/redux';
import { fetchCharactersThunk } from 'src/store/reducers/thunks';

const HomePage = () => {
  const dispatch = useAppDispatch();
  const { isLoading, input, characters, character, isModalOpen } = useAppSelector(
    (state) => state.characterReducer
  );

  useEffect(() => {
    console.log('effect');
    dispatch(fetchCharactersThunk(input));
  }, [input, dispatch]);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Home Page</h2>
      <SearchBar />
      <div className={styles.cards}>
        {characters.length ? (
          characters.map((character) => (
            <Card
              key={character.id}
              id={character.id}
              name={character.name}
              image={character.image}
            />
          ))
        ) : isLoading ? (
          <img src={loader} />
        ) : (
          <h1>Characters are not found</h1>
        )}
      </div>
      {isModalOpen && character ? <ModalCard {...character} /> : null}
    </div>
  );
};

export default HomePage;
