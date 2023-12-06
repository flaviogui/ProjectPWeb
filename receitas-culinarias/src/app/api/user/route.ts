import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import {getUsers} from "../../../lib/models/user"


 
export default function GET() {
  return NextResponse.json({ message: 'hello' },{status:200})
}