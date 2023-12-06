import { prisma } from "../prisma";
import { Point } from "./point";
import { Stage } from "./stage";
import { Igredient } from "./igredient";
import { Comment } from "./comment";

export interface Recipe{
    id:number
    title:string
    description:string
    url:string
    creatDate:string
    time:string
    points:Point[]
    stages:Stage[]
    igredients:Igredient[]
    category:string[]
    comments:Comment[]
    authorId:number

}


export const  createRecipe = async (recipe:Recipe) => {
    await prisma.recipe.create({
        data:{
            title:recipe.title,
            description:recipe.description,
            url:recipe.url,
            authorId:recipe.authorId,
            time:recipe.time,
        }
    })
}

export const getRecipes = async () => {
    const recipes = await prisma.recipe.findMany();
    return recipes
}