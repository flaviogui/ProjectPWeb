import { NextRequest, NextResponse } from "next/server";
import {createRecipe,getRecipes} from "../../../lib/models/recipe"


 
export async function GET(resquest:NextRequest) {
    const recipes = await getRecipes()
    return NextResponse.json({ message: 'success',data:recipes},{status:200})
}

export async function POST(resquest:NextRequest) {
    const recipe ={
        authorId:parseInt(resquest.nextUrl.searchParams.get('authorId') ?? 'underfined'),
        title:resquest.nextUrl.searchParams.get('title') ?? 'underfined',
        description:resquest.nextUrl.searchParams.get('description') ?? 'underfined',
        url:resquest.nextUrl.searchParams.get('url') ?? 'underfined',
        time:resquest.nextUrl.searchParams.get('time') ?? 'underfined',
        igredient: () =>{
            
        }
    }
    try {
    createRecipe(
        recipe.title,
        recipe.description,
        recipe.url,
        recipe.authorId,
        recipe.time
        )
    return NextResponse.json({ message: 'success'},{status:200})
    } catch (error) {
    return NextResponse.json({ message: 'erro'},{status:200})
    }
}