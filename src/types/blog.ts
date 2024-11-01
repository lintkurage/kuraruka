export interface AboutType{
    id:string
    content:string
    createdAt:string
    publishedAt:string
    updatedAt:string
}

export interface CategoryType{
    id:string
    name:string
    color?:string
}

export interface BlogType{
    id:string
    createdAt:string
    publishedAt:string
    updatedAt:string
    title:string
    slug:string
    publishData:string
    content:string
    eyecatch:{
        url:string
        height:number
        width:number
    }
    category:CategoryType
}