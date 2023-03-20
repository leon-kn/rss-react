import SearchBar from '../components/SearchBar';
import Header from '../layout/Header';
import data from '../assets/data';
import Card from '../components/Card';
import './HomePage.css';

const HomePage = () => {
  return (
    <div>
      <Header title="Home Page" />
      <h2>Home Page</h2>
      <SearchBar />
      <div className="cards">
        {data.products.map((card) => {
          return <Card key={card.id} {...card} />;
        })}
      </div>
    </div>
  );
};

export default HomePage;
