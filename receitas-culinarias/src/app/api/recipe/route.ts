import { NextRequest, NextResponse } from "next/server";
import {createRecipe,getRecipes} from "../../../lib/models/recipe"


 
export async function GET(req:Request) {
    const recipes = await getRecipes()
    return NextResponse.json({ message: 'success',data:recipes},{status:200})
}

export async function POST(req:Request) {
    const data  = await req.json()
    try{
        createRecipe(data)
        return NextResponse.json({ message: 'success'},{status:200})
    }catch(error){
        return NextResponse.json({ message: 'error'},{status:200})
    }
}