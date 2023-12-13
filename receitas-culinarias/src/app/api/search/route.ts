import { NextRequest, NextResponse } from "next/server";
import {getRecipesForSearch} from "../../../lib/models/recipe"


 
export async function GET(req:Request) {
    const data = await req.json()
    const recipes = await getRecipesForSearch(data.data)
    return NextResponse.json({ message: 'success',data:recipes},{status:200})
}