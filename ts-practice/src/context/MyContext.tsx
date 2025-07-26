import { createContext } from "react";

interface MyContextType {
    count: number,
    increment: ()=>void,
    decrement: ()=>void
}

export const MyContextType =createContext<MyContextType>({
    count:0 ,
    increment: ()=>{},
    decrement: ()=>{}
})

