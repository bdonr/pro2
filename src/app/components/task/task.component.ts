import {Component, Input, OnInit} from '@angular/core';
import {TaskService} from "../../services/task/task.service";
import {AdressService} from "../../services/adress/adress.service";
import {Task} from "../entities/Task";
import {Params, ActivatedRoute} from "@angular/router";
import {isUndefined} from "util";
import {UserService} from "../../services/user/user.service";
import {AuthService} from "../../services/auth/auth.service";
import {marker} from "../tasks/tasks.component";

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
                this.task = this.taskManager.findById(this.id);
                console.log(this.task);
                if (this.task.owner== authService.getCurrentUser()) {
                    this.isOwn = true;
                }
                if(authService.getCurrentUser().admin){
                    this.isAdmin=true;
                }
                this.marker={id:this.task.id,name:this.task.name,lat:this.task.locale.lat,lng:this.task.locale.lng,owner:this.task.owner}
                console.log(this.marker);
            }
        });
    }


    ngOnInit() {
    }

}
