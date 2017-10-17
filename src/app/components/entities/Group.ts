import {User} from "./User";
/**
 * Created by joker on 07.10.2017.
 */
export class Group{

    constructor (public id:number,public name:string,public description:string,public users:User[],public founder:User){}

}