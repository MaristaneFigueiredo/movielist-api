
export type messageError = {
    name: string
    , message: string
    , email?:string
}


export type MovieEntity = {
    id?: number,
    name: string,
    whatched?:boolean,
    platformId:number, 
    genreId:number    
}

export type MovieResponse = {
    id?: number,
    name: string,
    whatched:boolean,
    platformId?:number,
    plataformName?:string, 
    genreId?:number    
    genreName?:string
}