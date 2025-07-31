import UserInfo from './component/UserInfo'
import FocusInput from './component/FocusInput'
import AdminInfo from './component/AdminInfo'
import type { Info, Admin } from './Type'
import Counter from './component/counter'
import UserProfile from './component/UserProfile'
import ContextCounter from './component/ContextCounter'
import ContextProvider from './component/ContextProvider'
import Effect from './component/Effect'
import HookForm from './component/HookForm'
import EffectForUse from './component/EffectForUse'
import { Suspense } from 'react'
import ContextInUse from './component/ContextInUse'
import ThemeToggler from './component/ThemeToggler'

function App() {

  const user: Info={
    id: 1,
    name: 'John Doe',
    email: 'johndoe@gmail.com'
  }

  const admin: Admin={
    id: 2,
    name: 'Admin Guy',
    email: 'admin@gmail.com',
    role: 'admin',
    lastLogin: new Date()
  }


  return (
    <>
    <Suspense fallback={<div> Loading.....</div>}>
      <EffectForUse/>
    </Suspense>
  
    <ContextInUse>
      <ThemeToggler/>
    </ContextInUse>
      <div>
        <UserInfo userData={user}/>
        <hr></hr>
        <AdminInfo userData={admin}/>
      </div>
      <hr></hr>
      <Counter/>
      <hr></hr>
      <UserProfile/>
      <hr></hr>
      <FocusInput/>
      <hr></hr>
      <ContextProvider>
        <ContextCounter/>
      </ContextProvider>
      <hr></hr>
      <Effect/>
      <hr></hr>
      <HookForm/>
      
    </>
  )
}

export default App
