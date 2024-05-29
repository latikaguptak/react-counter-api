import { createContext, useState } from "react";
export const CouterContext = createContext(null);

export const CounterProvider = (props) =>{
    const [count, setCount] = useState(0); 
    return(
        <CouterContext.Provider value={{count , setCount}}>
            {props.children}
        </CouterContext.Provider>
    )
}
 
 