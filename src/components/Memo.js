import React, { useState } from 'react';
import styled from 'styled-components';
import Child from './Child';
import MemoChild from './MemoChild';
import Button from './common/Button';

const Row = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Memo = () => {
  console.log('Memo 컴포넌트 호출');

  const [number, setNumber] = useState(0);

  const handleClick = () => {
    setNumber(number + 1);
  };

  return (
    <div>
      <h1>MEMO</h1>
      <p>{number}</p>
      <Button onClick={handleClick}>Plus</Button>
      <Row>
        <Child />
        <MemoChild />
      </Row>
    </div>
  );
};

export default Memo;
