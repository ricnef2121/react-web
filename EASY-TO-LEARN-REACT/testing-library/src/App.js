import React from 'react';
import Counter from './Components/Counter';
import Inputs from './Components/Inputs';
export default function App() { 

  return (
      <div>
          <Counter />
          <Inputs total={10} />
      </div>
  )
}