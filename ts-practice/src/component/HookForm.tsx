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
            <input {...register('name',{required: "ABC"})} />
            {errors.name&&<p>{errors.name.message}</p>}
        </div>
        <button type="submit">Submit</button>
    </form>
  )
}

export default HookForm