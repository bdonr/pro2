import {Component, Input, OnInit} from '@angular/core';
import {TaskService} from "../../services/task/task.service";
import {AdressService} from "../../services/adress/adress.service";
import {Task} from "../entities/Task";
import {Params, ActivatedRoute} from "@angular/router";
import {isUndefined} from "util";
import {UserService} from "../../services/user/user.service";
import {AuthService} from "../../services/auth/auth.service";
import {marker} from "../tasks/tasks.component";
import {Locale} from "../entities/Locale";

@Component({
    selector: 'app-task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
    task: Task;
    id: number;
    isAdmin:boolean;
    isOwn: boolean;
    isloggedin: boolean;
    marker:marker;
    constructor(private authService: AuthService, private taskManager: TaskService, private userService: UserService, private activatedRoute: ActivatedRoute) {
        this.activatedRoute.params.subscribe((params: Params) => {
            if (!isUndefined(params.id)) {
                this.id = params.id;
                this.taskManager.findById(this.id).subscribe(data=>{
                    this.userService.findUserById(data[0].creator_id).subscribe(data2=>{
                          this.task= new Task(data[0]._id,data[0].name,new Locale(12.1212,12.12122),null,data2[0]);
                        this.marker={id:this.task._id,name:this.task.name,lat:this.task.locale.lat,lng:this.task.locale.lng,owner:this.task.owner};
                        console.log("marjker",this.marker);
                    });
                    //
                });
                /* if (this.task.owner== authService.getCurrentUser()) {
                    this.isOwn = true;
                }
                if(authService.getCurrentUser().admin){
                    this.isAdmin=true;
                }*/
               // this.marker={id:this.task._id,name:this.task.name,lat:this.task.locale.lat,lng:this.task.locale.lng,owner:this.task.owner}
            }
        });
    }


    ngOnInit() {
    }

}
