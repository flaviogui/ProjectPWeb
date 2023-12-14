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


export const  createRecipe = async (data:any) => {
    await prisma.recipe.create({
        data:{
            title:data.title,
            description:data.description,
            url:data.url,
            authorId:data.authorId,
            time:data.time,
            stages:{createMany:data.stages},
            ingredients:{createMany:data.igredients}
        }
    })
}



/* data
{
    title:"noite ceu",
    description:"forca e coragem",
    url:"dasdsa",
    authorId:1,
    time:"09:50",
    stages:[
        {
            description:"sadsad",
            stage:1
        },
        {
            description:"dasdsadsd",
            stage:2
        },
    ],
    ingredients:[
        {
            name:"agua",
            amount:90,
            measure:ML
        }
    ]
}
*/



export const getRecipes = async () => {
    const recipes = await prisma.recipe.findMany();
    return recipes
}


export const getRecipeForId = async (id:number) => {
    const recipe = await prisma.recipe.findUnique(
        {
            where:{
                id:id 
            },
            include:{
                stages:true,
                ingredients:true,
            }
        }
    );
    return recipe
}

export const getRecipesForCategoryForId = async (id:number) => {
    const recipes = await prisma.recipe.findMany(
        {
            where:{
                category:{some:{id:id}},
            },
            include:{
                category:{
                    where:{
                        id:id
                    }
                },
            },
        }
    );
    return recipes
}

export const getRecipesForAuthorId = async (id:number) => {
    const recipes = await prisma.recipe.findMany(
        {
            where:{
                authorId:id
            },
        }
    );
    return recipes
}

export const getRecipesForSearch = async (params:string) => {
    const recipes = await prisma.recipe.findMany(
        {
            where:{
                title:{contains:params},
            },
        }
    );
    return recipes
}