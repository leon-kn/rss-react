import Card from 'src/components/Card/Card';
import SearchBar from 'src/components/SearchBar';
import styles from './HomePage.module.css';
import loader from 'src/static/loading.gif';
import ModalCard from 'src/components/ModalCard/ModalCard';
import { useAppSelector } from 'src/hooks/redux';
import { useGetCharactersByNameQuery } from 'src/services/CharacterService';

const HomePage = () => {
  const { input, character, isModalOpen } = useAppSelector((state) => state.characterReducer);
  const { currentData, isFetching, isError } = useGetCharactersByNameQuery(input);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Home Page</h2>
      <SearchBar />
      {isFetching && <img src={loader} />}
      {isError && <h1>Characters are not found</h1>}
      <div className={styles.cards}>
        {currentData &&
          currentData.results.map((character) => (
            <Card
              key={character.id}
              id={character.id}
              name={character.name}
              image={character.image}
            />
          ))}
      </div>
      {isModalOpen && character ? <ModalCard {...character} /> : null}
    </div>
  );
};

export default HomePage;
