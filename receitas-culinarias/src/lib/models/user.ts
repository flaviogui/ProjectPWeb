import {prisma} from "../prisma"
import { Recipe } from "./recipe";

export interface User{
    id:number
    name:string
    email:string
    password:string
    recipes:Recipe[]
    role:Role
}

enum Role{
    ADMIN,
    USER
}


export const  createUser = async (name:string,email:string,password:string) => {
    await prisma.user.create({
        data:{
            name:name ,
            email:email,
            password:password,
        }
    })
}

export const getUsers = async () => {
    const users = await prisma.user.findMany();
    return users
}

export const getUserForId = async (id:number) => {
    const user = await prisma.user.findUnique(
        {
            where:{
                id:id
            }
        }
    );
    return user
}


export const getUserForEmail = async (email:string) => {
    const user = await prisma.user.findUnique(
        {
            where:{
                email:email
            }
        }
    );
    return user
}