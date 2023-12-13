import { NextRequest, NextResponse } from "next/server";
import {getRecipeForId} from "../../../../lib/models/recipe"


 
export async function GET(resquest:Response,context:any) {
    const id = parseInt(context.params.id)
    const RecipeForId = (await getRecipeForId(id))
    return NextResponse.json({ message: 'succuess',data:RecipeForId},{status:200})
}

