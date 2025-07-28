import { useContext} from "react"
import { MyContextType } from "../context/MyContext"


let Counter = ()=>{
    const {count, increment, decrement} = useContext(MyContextType)
    return( 
    <>
        <h1>Context Counter: {count}</h1>
        <div>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    </>
)}

export default Counter