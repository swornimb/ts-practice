import { useForm} from "react-hook-form"
import { type SubmitHandler } from "react-hook-form"


function HookForm() {
 
interface FormData{
    name: string;
    email:string;
    password:string;
}    

const {register,handleSubmit,formState: { errors }} = useForm<FormData>()

const onSubmit:SubmitHandler<FormData> = (data)=>{
    console.log(data)
}

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <label>Name</label>
            <input {...register('name',{required: "Name cannot be empty"})} />
            {errors.name&&<p style={{color: "red"}}>{errors.name.message}</p>}
        </div>
        <div>
            <label>Email</label>
            <input {...register('email',{
                required: "Email cannot be empty",
                pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                    message: "Email doesn't have a valid format"
                }

                })} 
                
                />
            {errors.email&&<p style={{color: "red"}}>{errors.email.message}</p>}
        </div>
        <div>
            <label>Password</label>
            <input type="password" {...register('password',{
                required: "Password cannot be empty",
                minLength: {
                    value:8,
                    message:"Password cannot be less that 8 letters"
                }

                })} />
            {errors.password&&<p style={{color: "red"}}>{errors.password.message}</p>}
        </div>
        <button type="submit">Submit</button>
    </form>
  )
}

export default HookForm