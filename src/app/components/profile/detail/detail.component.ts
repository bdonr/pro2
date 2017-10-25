import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "../../../services/user/user.service";
import {User} from "../../entities/User";
import {ActivatedRoute, Params} from "@angular/router";
import {isUndefined} from "util";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  id:string;
  @Input() user:User;
  src:any;

  constructor(private userService:UserService,private activatedRoute:ActivatedRoute) {
    this.src = "assets/img/lin.jpg";

    this.activatedRoute.params.subscribe((params: Params) => {
      if (!isUndefined(params.id)) {
        this.id = params.id;
       this.userService.findUserById(this.id).subscribe(data=>{
         console.log(data,this.id);
         this.user=data[0];
         console.log(this.user);
       });

      }
    });
  }

  ngOnInit() {
  }

}
