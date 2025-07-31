import { createContext } from "react";

interface MyContextType {
    count: number,
    increment: ()=>void,
    decrement: ()=>void
}

interface MyContextWithUseType {
    theme: 'light' | 'dark',
    toggleTheme: ()=>void,
}


export const MyContextType =createContext<MyContextType>({
    count:0 ,
    increment: ()=>{},
    decrement: ()=>{}
})

export const MyContextWithUse = createContext<MyContextWithUseType>({
    theme:'light',
    toggleTheme: ()=>{}
})
