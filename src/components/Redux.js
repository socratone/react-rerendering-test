import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from '../redux/reduxSlice';
import Button from './common/Button';

const Redux = () => {
  console.log('Redux 컴포넌트 호출');

  const number = useSelector((state) => state.redux.number);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(increment());
  };

  return (
    <div>
      <h1>REDUX</h1>
      <p>{number}</p>
      <Button onClick={handleClick}>Plus</Button>
    </div>
  );
};

export default Redux;
