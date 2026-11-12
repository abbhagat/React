import {useState} from 'react'
import './App.css'
import {Welcome} from "./component/Welcome.jsx";
import {Button} from "./component/Button.jsx";

function App() {

  const [count, setCount] = useState(0)

  return (
    <>
      <h1>React Playground App</h1>
      <Welcome name="Abhinaw"/>
      <Button label="Click Me"/>
    </>
  )
}

export default App
