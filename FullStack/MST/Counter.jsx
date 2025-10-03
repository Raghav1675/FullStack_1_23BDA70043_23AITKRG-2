import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const MAX_LIMIT = 10;
  const MIN_LIMIT = 0;

  const handleIncrement = () => {
    if (count < MAX_LIMIT) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > MIN_LIMIT) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <h1>Counter</h1>
      <div>{count}</div>
      
      {count === MAX_LIMIT && (
        <p>
          Maximum limit reached!
        </p>
      )}

      <div>
        <button
          onClick={handleDecrement}
          disabled={count === MIN_LIMIT}
        >
          Decrement
        </button>

        <button
          onClick={handleIncrement}
          disabled={count === MAX_LIMIT}
        >
          Increment
        </button>
      </div>
    </div>
  );
};

export default Counter;