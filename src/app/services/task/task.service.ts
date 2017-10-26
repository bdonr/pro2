import { Injectable } from '@angular/core';
import {Task} from "../../components/entities/Task";
import {Locale} from "../../components/entities/Locale";
import {AdressService} from "../adress/adress.service";
import {UserService} from "../user/user.service";
import {User} from "../../components/entities/User";
import {Http} from "@angular/http";
@Injectable()
export class TaskService {


  private static tasks:Task[];
  constructor(private adressService:AdressService,private userService:UserService,private http:Http) {
      this.getTasks();
      console.log(TaskService.tasks)
  }

public createTask(task:Task){
      return this.http.put('http://192.168.178.100/rest/task',task).map(res=>res.json());
}
  public findByName(name:string){
      return this.http.get('http://192.168.178.100/rest/task/'+name).map(res=>res.json());
  }


  public findById(id:number){

      this.http.get('http://192.168.178.100/rest/task/id/59f1356b870e1c506f353624').subscribe(data=>{
          console.log("asdasdas",data);
      })
      return this.http.get('http://192.168.178.100/rest/task/id/59f1356b870e1c506f353624').map(res=>res.json());
  }

  public findByUser(user:User){

  }

  public  getTasks(){
      return this.http.get('http://192.168.178.100/rest/task').map(res=>res.json());
  }




}
