import { useState, type ReactNode } from 'react'
import { MyContextType } from '../context/MyContext.tsx'

interface ContextProvideType{
    children: ReactNode;
}

const ContextProvider:React.FC<ContextProvideType> = ({children})=>{

  const [count,setCountData] = useState<number>(0)

  const increment = ()=>setCountData(count+1)
  const decrement = ()=>setCountData(count-1)

  return (
    <MyContextType.Provider value={{count, increment, decrement}}>
        {children}
    </MyContextType.Provider>
  )
}

export default ContextProvider