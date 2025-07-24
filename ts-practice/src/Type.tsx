type Info = {
    id: number,
    name: string,
    email: string
}

type Admin = Info & {
    role: string,
    lastLogin: Date
}

type UserProfiles ={
    name: string,
    age: number,
    email: string
}

export {type Info, type Admin, type UserProfiles}