import { useState, type ReactNode } from "react"
import { MyContextWithUse } from "../context/MyContext"

interface ContextType {
    children: ReactNode
}
type Theme = 'light' | 'dark'

const ContextInUse: React.FC<ContextType>= ({children})=> {

  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = ()=> (theme=='light'?setTheme('dark'): setTheme('light'))
  
  return (
    <MyContextWithUse.Provider value={{theme, toggleTheme}}>
      {children}
    </MyContextWithUse.Provider>
  )
}

export default ContextInUse