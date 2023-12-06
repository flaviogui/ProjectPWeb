import { prisma } from "../prisma";
import { Recipe } from "./recipe";

export interface Category{
    id:number
    category: string
    recipes: Recipe[]
}
