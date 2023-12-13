import { NextRequest, NextResponse } from "next/server";
import {createUser,getUsers} from "../../../lib/models/user"


 
export async function GET(resquest:NextRequest) {
  const users = (await getUsers()).map((user) => {
    user.password ="********"
    return user
  })
  return NextResponse.json({ message: 'succuess',data:users},{status:200})
}

export async function POST(req:Request) {

  const data = await req.json()
  try {
    createUser(data.name,data.email,data.password)
    return NextResponse.json({ message: 'success'},{status:200})
  } catch (error) {
    return NextResponse.json({ message:error},{status:200})
  }
}