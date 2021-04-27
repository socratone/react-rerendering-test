import React from 'react';
import { useMutation } from 'react-query';
import Button from './common/Button';

const AsyncMutate = () => {
  console.log('AsyncMutate 컴포넌트 호출');

  const postUser = (user) => {
    console.log('user:', user);
    return fetch('https://koreanjson.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .catch((error) => error);
  };

  const mutation = useMutation(postUser);

  const handleClick = async () => {
    const user = { username: 'John' };
    
    try {
      const result = await mutation.mutateAsync(user);
      console.log('result:', result);
    } catch (error) {
      console.error(error);
    } finally {
      console.log('done');
    }
  };

  return (
    <div>
      <Button onClick={handleClick}>Post</Button>
    </div>
  );
};

export default AsyncMutate;
