import { NextRequest, NextResponse } from "next/server";
import {createUser,getUserForEmail} from "../../../../lib/models/user"


 


export async function POST(req:Request) {
    var exist = false
    const data = await req.json()
    getUserForEmail(data.email).then((user) => {
        if(user?.email == data.email){
            exist = true
        }
    })
    if(!exist){
        try {
            await createUser(data.name,data.email,data.password)
            return NextResponse.json({ message: 'success'},{status:200})
        } catch (error) {
            return NextResponse.json({ message:error},{status:200})
        }
    }else{
        return NextResponse.json({ message: 'exist'},{status:200})
    }
}