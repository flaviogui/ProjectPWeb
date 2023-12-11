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


export const  createRecipe = async (title:string,description:string,url:string,authorId:number,time:string) => {
    await prisma.recipe.create({
        data:{
            title:title,
            description:description,
            url:url,
            authorId:authorId,
            time:time,
        }
    })
}


export const getRecipes = async () => {
    const recipes = await prisma.recipe.findMany();
    return recipes
}