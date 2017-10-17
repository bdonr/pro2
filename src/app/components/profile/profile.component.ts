import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, RouterState, RouterStateSnapshot} from "@angular/router";
import {UserService} from "../../services/user/user.service";
import {isUndefined} from "util";
import {User} from "../entities/User";
import {Subject} from "rxjs";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  id:number;
  user:User;
  src:any;
  search:string;
  users:User[];
  input=new Subject();

  constructor(private activatedRoute:ActivatedRoute, private userService:UserService) {
    this.setProfile();
  }
  ngOnInit() {
  }
  onChange(e:string) {
    this.input.next(e);
  }

  setProfile(){
    this.input.subscribe(()=>{
      this.users = this.userService.findUsersByUsername(this.search);
    });
  }
}
