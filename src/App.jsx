
import { useState } from 'react';
import './App.css'

function App() {


  const [count, setCount] = useState(0)
  const [sixes, setSixes] = useState(0)
  const [four, setFour] = useState(0)
  const myCount = () => {
    const newCount = count + 1;
    setCount(newCount);
  }

  const sixHandle = () => {
    const newSix = count + 6;
    const newSix1 = sixes + 1;
    setCount(newSix)
    setSixes(newSix1)
  }
  const FourHandel = () => {
    const newFour = count + 4;
    setCount(newFour);
    const four1 = four + 1;
    setFour(four1)


  }

  return (
    <>
      <div style={{ border: '  4px solid  red' }}>
        <span>Count:{count}</span>
        <br></br>
        <button onClick={myCount}>click me</button>
        <h1 className="">six count:{sixes}</h1>
        <h1 className="">four count:{four}</h1>
        <button onClick={sixHandle}>six</button>
        <button onClick={FourHandel}>Four</button>

        <h1>Vite + React</h1>
      </div>
    </>
  )
}

export default App
