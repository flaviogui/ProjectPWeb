import { NextRequest, NextResponse } from "next/server";
import {getRecipesForCategoryForId} from "../../../../lib/models/recipe"


 
export async function GET(resquest:Request,context:any) {
    const id = parseInt(context.params.id)
    const RecipesForId = (await getRecipesForCategoryForId(id))
    return NextResponse.json({ message: 'succuess',data:RecipesForId},{status:200})
}