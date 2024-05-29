import { useContext } from 'react'
import './App.css'
import Countnum from './components/Countnum'
import {CouterContext} from './components/Context.jsx'

function App() {
  const contState = useContext(CouterContext);
  console.log("cunter",contState)
  return (
    <>
    <h3>Count is {contState.count}</h3>
    <Countnum/>
    <Countnum/>
    <Countnum/>
    <Countnum/>
    </>
  )
}

export default App
