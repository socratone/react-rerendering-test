import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Button from './common/Button';

const PreservedQueryKey = () => {
  const [id, setId] = useState(1);

  const { isLoading, error, data } = useQuery(
    ['PreservedQueryKey', id, [1, 2, 3]],
    () => fetch(`https://koreanjson.com/posts/${id}`).then((res) => res.json()),
    {
      staleTime: Infinity, // fetch를 다시 하지 않는다.
    }
  );

  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  return (
    <div>
      <h1>PRESERVED QUERY KEY</h1>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <Button onClick={() => setId(1)}>1</Button>
        <Button onClick={() => setId(2)}>2</Button>
        <Button onClick={() => setId(3)}>3</Button>
        <Button onClick={() => setId(4)}>4</Button>
      </div>
      <p>{data.title}</p>
    </div>
  );
};

export default PreservedQueryKey;
