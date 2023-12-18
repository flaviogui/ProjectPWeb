import { NextRequest, NextResponse } from "next/server";
import {getUserForEmail} from "../../../../lib/models/user"
import { redirect } from "next/navigation";


 
export async function POST(req:Request) {
    const data = await req.json()
    console.log("1:json")
    console.log(data.password)
    console.log(data.email)
    const user = await getUserForEmail(data.email)
    console.log("1:pass")
    if(user && user?.password == data.password){
      console.log("1:return")
      return NextResponse.json({ message: 'success',data:{id:user?.id,name:user?.name}},{status:200})
    }else{
      console.log("2:return")
      return NextResponse.json({ message: 'error',},{status:400})
    }

}