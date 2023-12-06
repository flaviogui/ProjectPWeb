import { NextRequest, NextResponse } from "next/server";
import {getUsers} from "../../../lib/models/user"


 
export async function GET(resquest:NextRequest) {
  const users = (await getUsers()).map((user) => {
    user.password ="********"
    return user
  })
  return NextResponse.json({ message: 'hello',data:users},{status:200})
}