import Card from 'src/components/Card/Card';
import Header from 'src/layout/Header';
import SearchBar from 'src/components/SearchBar';
import data from 'src/assets/data';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div>
      <Header title="Home Page" />
      <h2>Home Page</h2>
      <SearchBar />
      <div className={styles.cards}>
        {data.products.map((card) => {
          return <Card key={card.id} {...card} />;
        })}
      </div>
    </div>
  );
};

export default HomePage;
