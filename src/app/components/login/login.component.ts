import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user/user.service";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth/auth.service";
import {Login} from "../entities/Login";
import {Login2} from "../entities/Login2";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string;
  pwd:string;
  name:string;
  constructor(private userservice:UserService,private router:Router,private authService:AuthService) { }


  login(){
  this.authService.login(new Login("h@web.de","Hallo1337"),new Login2("Hallo1337","Hallo1337"));
    if(this.authService.getCurrentUser()!=null){
      this.router.navigate(['/profile/'+this.authService.getCurrentUser()._id]);
    }
  }
  ngOnInit() {
  }

}
