import React, {useContext} from 'react'
import { CounterProvider } from './Context'
// import { CounterProvider } from 'Context.jsx'
import { CouterContext } from './Context'
const Countnum = () => {
    const changedCounter = useContext(CouterContext)
  return (
    <> 

    <button onClick={()=>changedCounter.setCount(changedCounter.count+1)} >Increment</button>
    <button onClick={()=>changedCounter.setCount(changedCounter.count-1)} >Decrement</button><br /> 

    </>
  )
}

export default Countnum