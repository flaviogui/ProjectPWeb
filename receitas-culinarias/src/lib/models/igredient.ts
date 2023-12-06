import { prisma } from "../prisma";

export interface Igredient{
    id:number
    recipeId:number
    name:string
    amount:number
    measure:Measure
}

enum Measure{
    KG,
    G,
    MG,
    ML
}