import React, { useState } from 'react';

export const SimpleCounter = () => {

  const [count, setCount] = useState(0);

  console.log("SimpleCounter rendered Count : ", count);

  const handleIncrement = () => {
    setCount(count + 1);
    console.log("Incremented count to: count ", count);
    setCount(count + 5);
    console.log("Incremented count to count + 5 :", count);
    setCount(count + 10);
    console.log("Incremented count to count + 10:", count);
    setTimeout(() => {
      console.log("After 2 sec count is : ", count);
    }, 2000);
  }

  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={handleIncrement}>Increment</button>
    </>
  )
}
