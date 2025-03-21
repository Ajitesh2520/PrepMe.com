import { FieldPath, FieldValue, Timestamp } from "firebase/firestore";


export interface User{
    id:string;
    name:string;
    email:string;
    imageUrl:string;
    createAt:Timestamp | FieldValue;
    updateAt:Timestamp | FieldValue
}