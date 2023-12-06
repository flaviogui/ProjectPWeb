import { NextRequest, NextResponse } from "next/server";
import {getUserForId} from "../../../../lib/models/user"


 
export async function GET(resquest:Response,context:any) {
  const id = parseInt(context.params.id)
  const user = await getUserForId(id)
  if(user != null){
    user.password ="********"
  }
  return NextResponse.json({ message: 'success',data:user},{status:200})
}