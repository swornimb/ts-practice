import { useState } from "react"
import type { UserProfiles } from "../Type"

const UserProfile = ()=>{
    const [profile, setProfile] = useState<UserProfiles>({
    name: '',
    age:0,
    email:''
  })

  const updateName = (name:string)=> {setProfile((prev)=>({...prev, name: name}))}
  const updateAge = (age:string)=> {setProfile((prev)=>({...prev, age: Number(age)}))}
  const updateEmail = (email:string)=> {setProfile((prev)=>({...prev, email: email}))}

  const [todos, setTodos] = useState<UserProfiles[]>([])

  const onSubmit = (e:React.MouseEvent)=>{
    e.preventDefault();
    setTodos([...todos, profile])
    setProfile({
    name: '',
    age:0,
    email:''
  })}


    return(
        <div>
        <h1>
          User Profile
        </h1>
        
        <form>
            <input type='text' placeholder='name' value={profile.name} onChange={(e)=>updateName(e.target.value)}/>
            <input type='number' placeholder='age' value={profile.age} onChange={(e)=>updateAge(e.target.value)}/>
            <input type='text' placeholder='email' value={profile.email} onChange={(e)=>updateEmail(e.target.value)}/>
            <button type="submit" onClick={(e)=>onSubmit(e)}>Submit</button>
        </form>

        <div>
          <p>Name: {profile.name}</p>
          <p>Age: {profile.age}</p>
          <p>Email: {profile.email}</p>
        </div>
        <div>
            {todos.map((todo)=>(
                <p>{todo.name} | {todo.age} | {todo.email}</p>
            ))}
        </div>
      </div>
    )
}

export default UserProfile;