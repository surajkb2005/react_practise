import React from 'react';
import Card from './components/Card';
import DetailedCard from './components/DetailsCard';

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <Card
        image="https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg"
        alt="Cat 1"
      />
      <Card
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPv7ay0a8t74aIzkiN2SyfQJLePWPEuTv7vQ&s"
        alt="Cat 2"
      />
      <Card
        image="https://images1.wionews.com/images/wion/original/2024/9/17/1726574772827_85b85091e09ef1e5b62791510c2a6562.jpg"
        alt="Cat 3"
      />
      <Card
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzbKW0m5S1KF1NErcE_qE7Qj-xcG2CgNd5Jw&s"
        alt="Cat 4"
      />
      <p>Cat</p>
      <DetailedCard />
    </div>
  );
}

export default App;