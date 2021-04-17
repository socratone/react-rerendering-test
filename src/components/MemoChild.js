import React from 'react';

const MemoChild = () => {
  console.log('MemoChild 컴포넌트 호출');

  return (
    <div>
      <p>MemoChild Component</p>
    </div>
  );
};

export default React.memo(MemoChild);
