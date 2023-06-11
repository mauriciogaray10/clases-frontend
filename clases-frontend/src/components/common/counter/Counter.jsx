import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

    return (
    <>
    <h2>{counter}</h2>
    <button onClick={()=>{setCounter(counter + 1)}}> Sumar </button>
    </>
    
  )  
}

export default Counter