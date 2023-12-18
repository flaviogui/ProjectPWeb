import { NextRequest, NextResponse } from "next/server";
import {createUser,getUserForEmail} from "../../../lib/models/user"


export async function POST(req:Request) {

  const data = await req.json()
  try {
    createUser(data.name,data.email,data.pass)
    const user = await getUserForEmail(data.email)
    return NextResponse.json({ message: 'success',data:user},{status:200})
  } catch (error) {
    return NextResponse.json({ message:'error'},{status:200})
  }
}