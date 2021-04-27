import React from 'react';
import { useQuery, useQueryClient } from 'react-query';
import Button from './common/Button';

const Refetch = () => {
  const { isLoading, error, data } = useQuery(
    'refetch',
    () => fetch('https://koreanjson.com/posts/1').then((res) => res.json()),
  );

  const queryClient = useQueryClient()

  const handleClick = () => {
    queryClient.invalidateQueries('refetch')
  }

  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  return (  
    <div>
      <h1>REFETCH</h1>
      <p>{data.title}</p>
      <Button onClick={handleClick}>Refetch</Button>
    </div>
  );
}
 
export default Refetch;