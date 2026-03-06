import React from 'react';
import Card from './components/Card';
import DetailedCard from './components/DetailsCard';
import catsList from './data.js';

function createCards(cats) {
  return (
    <Card
      image={cats.image}
      alt={cats.alt}
    />
  )
}

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      {catsList.map(createCards)}
      <p>Cat</p>
      <DetailedCard />
    </div>
  );
}

export default App;