import SearchBar from '../components/SearchBar';
import Header from '../layout/Header';
import data from '../assets/data';
import Card from '../components/Card';

const HomePage = () => {
  return (
    <div>
      <Header title="Home Page" />
      <h1>Home Page</h1>
      <SearchBar />
      {data.products.map((card) => {
        return <Card key={card.id} {...card} />;
      })}
    </div>
  );
};

export default HomePage;
