import { prisma } from "../prisma";

export interface Point{
    id:number
    autorId:number
    recipeId:number
    point:boolean
}