
import {Task} from "./Task";
import {ObjectId} from "./ObjectId";
export class User{

    constructor(public _id:string,public name:string ,public email:string,public password:string,public admin:boolean,public tasks:Task[]){}
}