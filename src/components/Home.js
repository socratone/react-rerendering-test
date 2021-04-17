import React, { useState } from 'react';
import Button from './common/Button';

const Home = () => {
  console.log('Home 컴포넌트 호출');

  const [number, setNumber] = useState(0);

  const handleClick = () => {
    setNumber(number + 1);
  };

  return (
    <div>
      <h1>HOME</h1>
      <p>{number}</p>
      <Button onClick={handleClick}>Plus</Button>
    </div>
  );
};

export default Home;
