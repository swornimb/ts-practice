import UserInfo from './component/UserInfo'
import AdminInfo from './component/AdminInfo'
import type { Info, Admin } from './Type'
import Counter from './component/counter'
import UserProfile from './component/UserProfile'

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
      <div>
        <UserInfo userData={user}/>
        <hr></hr>
        <AdminInfo userData={admin}/>
      </div>
      <hr></hr>
      <Counter/>
      <hr></hr>
      <UserProfile/>
      
    </>
  )
}

export default App
