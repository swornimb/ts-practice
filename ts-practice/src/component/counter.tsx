import { useState} from "react"

let Counter = ()=>{
    const [count, setCount] = useState<number>(0);
    return( 
    <>
        <h1>Counter: {count}</h1>
        <div>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <button onClick={()=>setCount(count-1)}>Decrement</button>
        </div>
    </>
)}

export default Counter