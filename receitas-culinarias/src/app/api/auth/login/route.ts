import { NextRequest, NextResponse } from "next/server";
import {createUser,getUserForEmail} from "../../../../lib/models/user"
import { signIn } from "next-auth/react";


export async function POST(req:Request) {
    var exist = false
    const data = await req.json()
     const user = await getUserForEmail(data.email).then((user) => {
        if(user?.email == data.email){
            exist = true
            return user 
        }
    })
    if(exist){
        if(user?.password == data.password){
            return NextResponse.json({ user:user},{status:200})
        }
    }
}