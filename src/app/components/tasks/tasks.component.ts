import {Component, OnInit} from '@angular/core';
import {Task} from "../entities/Task";
import {TaskService} from "../../services/task/task.service";
import {AdressService} from "../../services/adress/adress.service";
import {Observable, Subject} from "rxjs";
import {from} from "rxjs/observable/from";
import {User} from "../entities/User";

@Component({
    selector: 'app-tasks',
    templateUrl: './tasks.component.html',
    styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

    title: string = 'My first AGM project';
    zoom : number=10;
    lat: number = 52.128371;
    lng: number = 9.986716;

    markers:marker[]=[];
    tasks: Task[]=[];
    input = new Subject();
    search:string;
    constructor(private taskservice: TaskService, private adressService: AdressService) {
        this.setTasks();



    }

    onChange(e:string) {
        this.input.next(e);
    }


    setTasks() {
        this.input.subscribe(()=>{
            this.markers = [];
            this.tasks = this.taskservice.findByName(this.search);
            for (let entry of this.tasks) {
                this.markers.push({id:entry.id,name:entry.name,lat:entry.locale.lat,lng:entry.locale.lng,owner:entry.owner})
            }
        });
    }


    ngOnInit() {
    }

}
interface marker{
    id:number;
    name?:string;
    lat:number;
    lng:number;
    owner:User;
}

