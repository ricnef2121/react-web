import React,{useState} from 'react';

export default function Counter() {
  const [count, setCount] = useState(0)
  const increment = () => {
      setCount(count + 1)
  }

  return (
      <div>
          <h1 data-testid="count">{count}</h1>
          <button data-testid="plus" onClick={increment}>+</button>
      </div>
  )
}