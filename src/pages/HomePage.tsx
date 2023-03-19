import SearchBar from '../components/SearchBar';
import React from 'react';
import Header from '../layout/Header';

const HomePage = () => {
  return (
    <div>
      <Header title="Home Page" />
      <h1>Home Page</h1>
      <SearchBar />
    </div>
  );
};

export default HomePage;
