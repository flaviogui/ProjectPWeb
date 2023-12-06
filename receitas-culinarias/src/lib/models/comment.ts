import { prisma } from "../prisma";

export interface Comment{
    id:number
    description:string
    authorId:number
    recipeId:number
}

export const  createComment = async (comment:Comment) => {
    await prisma.comment.create({
        data:{
            authorId:comment.authorId,
            recipeId:comment.recipeId,
            description:comment.description

        }
    })
}