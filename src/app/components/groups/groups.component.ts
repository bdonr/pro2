import { Component, OnInit } from '@angular/core';
import {Group} from "../entities/Group";
import {Subject} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {GroupService} from "../../services/group/group.service";

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

  id:number;
  group:Group;
  src:any;
  search:string;
  groups:Group[];
  input=new Subject();

  constructor(private activatedRoute:ActivatedRoute, private groupService:GroupService) {
    this.setProfile();
  }
  ngOnInit() {
  }
  onChange(e:string) {
    this.input.next(e);
  }

  setProfile(){
    this.input.subscribe(()=>{
      this.groups = this.groupService.findGroupsByName(this.search);
    });
  }
}
