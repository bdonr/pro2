
import {Task} from "./Task";
export class User{

    constructor(public username:string ,public id:number,public email:string,public pwd:string,public admin:boolean,public tasks:Task[]){}
}