import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params, RouterState, RouterStateSnapshot} from "@angular/router";
import {isUndefined} from "util";
import {Group} from "../entities/Group";
import {GroupService} from "../../services/group/group.service";

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {
  @Input() group:Group;
  src:string;
  id:number;

  constructor(private groupService:GroupService,private activatedRoute:ActivatedRoute) {
    this.src = "assets/img/Community_2.png";
    this.activatedRoute.params.subscribe((params: Params) => {
      if (!isUndefined(params.id)) {
        this.id = params.id;
        this.group = this.groupService.findGroupsById(this.id);
        console.log(this.group);
      }
    });

  }

  ngOnInit() {
  }

}
