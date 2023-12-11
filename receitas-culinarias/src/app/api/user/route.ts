import { NextRequest, NextResponse } from "next/server";
import {createUser,getUsers} from "../../../lib/models/user"


 
export async function GET(resquest:NextRequest) {
  const users = (await getUsers()).map((user) => {
    user.password ="********"
    return user
  })
  return NextResponse.json({ message: 'succuess',data:users},{status:200})
}

export async function POST(resquest:NextRequest) {
  const user = {
    name:resquest.nextUrl.searchParams.get('name') ?? "",
    email:resquest.nextUrl.searchParams.get('email') ?? "",
    password:resquest.nextUrl.searchParams.get('password') ?? "",
}
  try {
    createUser(user.name,user.email,user.password)
    return NextResponse.json({ message: 'success'},{status:200})
  } catch (error) {
    return NextResponse.json({ message: 'erro'},{status:200})
  }
}