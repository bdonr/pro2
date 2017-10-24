import {Component, OnInit} from '@angular/core';
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

    id: number;
    user: User;
    src: any;
    search: string;
    users: User[];
    input = new Subject();
    error:string

    constructor(private activatedRoute: ActivatedRoute, private userService: UserService) {
    }

    ngOnInit() {
    }

    setProfile() {
        this.userService.findUserByName(this.search).subscribe(
            data => {
                if(data[0]!=null) {

                    if (data[0]._id != null) {
                        this.users = data;
                        this.error ="";
                    }
                    if (data[0].err != null) {
                        if(this.search.length>0){
                            this.error=data[0].errDesc;
                        }
                        else{
                            this.error ="";
                        }
                        this.users = null;
                    }

                    else {
                        this.user = null;
                    }
                }
            },
        );
    }
}
