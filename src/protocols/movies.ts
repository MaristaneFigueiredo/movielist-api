import { string } from "joi";

export type messageError = {
    name: string
    , message: string
    , email?:string
}

