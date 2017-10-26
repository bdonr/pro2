
import {Locale} from "../entities/Locale";
import {Adress} from "./Adress";
import {User} from "./User";
export class Task{


    constructor(public _id:string,public name:string,public locale:Locale,public users:User[],public owner:User){}
}
