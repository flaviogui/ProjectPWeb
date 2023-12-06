import { prisma } from "../prisma";

export interface Stage{
    id:number
    recipeId:number
    description:string
    stage:number
}