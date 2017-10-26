import {Component, OnInit} from '@angular/core';
import {Task} from "../../entities/Task";
import {User} from "../../entities/User";
import {Locale} from "../../entities/Locale";
import {UserService} from "../../../services/user/user.service";
import {TaskService} from "../../../services/task/task.service";

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {


    private description: string;
    private lng: number;
    private lat: number;
    private name: string;
    private users: User[] = [];
    private owner: User;

    constructor(private userService: UserService, private taskService: TaskService) {
    }


    send() {

        this.userService.findUserById("asdasdasdas").subscribe(data=>{
            this.owner=data;
        });

        this.taskService.createTask(new Task(null, this.name, new Locale(this.lng, this.lat), this.users,this.owner)).subscribe(data => {
            console.log(data);
        });
    }

    ngOnInit() {
    }

}
