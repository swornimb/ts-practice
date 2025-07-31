import {use} from 'react'
import { MyContextWithUse } from '../context/MyContext'

function ThemeToggler() {
  const {theme, toggleTheme} = use(MyContextWithUse)
  return (
    <div>
      {theme}
      ThemeToggler
      <button onClick={toggleTheme}>Toggler</button>
    </div>
  )
}

export default ThemeToggler