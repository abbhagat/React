import React, {useState} from "react";

export const PrevSimpleCounter = () => {

  const [count, setCount] = useState(0);

  console.log("PrevSimpleCounter rendered Count : ", count);

  const handleIncrement = () => {
    setCount((prevState) => prevState + 1);
    console.log("Incremented count to: count ", count);
    setCount((prevState) => prevState + 5);
    console.log("Incremented count to count + 5 :", count);
    setCount((prevState) => prevState + 10);
    console.log("Incremented count to count + 10:", count);
  }

  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={handleIncrement}>Increment</button>
    </>
  )
}