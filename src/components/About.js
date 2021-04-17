import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Button from './common/Button';

const About = () => {
  console.log('About 컴포넌트 호출');

  const [like, setLike] = useState(0);

  const { isLoading, error, data } = useQuery('korean', () =>
    fetch('https://koreanjson.com/posts/1').then((res) => res.json())
  );

  const handleClick = () => {
    setLike(like + 1);
  };

  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  return (
    <div>
      <p>{data.title}</p>
      <Button onClick={handleClick}>Like {like}</Button>
    </div>
  );
};

export default About;
