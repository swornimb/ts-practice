import { MyContextType } from '../context/MyContext.tsx'
import ContextCounter from './ContextCounter.tsx'

function ContextProvider() {
  return (
    <MyContextType.Provider value={{count}}>
        <ContextCounter/>
    </MyContextType.Provider>
  )
}

export default ContextProvider