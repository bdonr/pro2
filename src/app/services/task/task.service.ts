import { Injectable } from '@angular/core';
import {Task} from "../../components/entities/Task";
import {Locale} from "../../components/entities/Locale";
import {AdressService} from "../adress/adress.service";
import {UserService} from "../user/user.service";
import {User} from "../../components/entities/User";
@Injectable()
export class TaskService {


  private static tasks:Task[];
  constructor(private adressService:AdressService,private userService:UserService) {
      this.getTasks();
      console.log(TaskService.tasks)
  }


  public findByName(name:string){
    return this.getTasks().filter(task=> task.name.match("^"+name));
  }


  public findById(id:number):Task{
     console.log(this.getTasks().find(task=> task.id== id));
      return this.getTasks().find(task=> task.id== id);
  }

  public findByUser(user:User){

  }

  public  getTasks(){
      console.log(TaskService.tasks);
    return TaskService.tasks;
  }




}
