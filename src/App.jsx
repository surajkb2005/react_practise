import React from 'react';
import Card from './components/Card';
import DetailedCard from './components/DetailsCard';
import catsList from './data.js';

function App() {
  return (
    <div>
      <h1>Hello World</h1>

      {catsList.map((cats) => <Card image={cats.image} alt={cats.alt} />)}

      <p>Cat</p>
      <DetailedCard />
    </div>
  );
}

export default App;