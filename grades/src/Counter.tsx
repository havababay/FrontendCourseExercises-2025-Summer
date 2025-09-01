import { useEffect, useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    console.log("Counter mounted");
  },[]);
  
  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    setCount(count - 1);
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}
