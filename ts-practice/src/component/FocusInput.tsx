import { useRef } from "react"

const FocusInput = ()=>{
    const infoRef = useRef<HTMLInputElement>(null);
    return(<>
        <input type="text" ref={infoRef}/> 
        <button onClick={()=>infoRef.current?.focus()}>Submit</button>
    </>)
}

export default FocusInput