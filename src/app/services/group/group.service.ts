import {Injectable} from '@angular/core';
import {Group} from "../../components/entities/Group";
import {UserService} from "../user/user.service";

@Injectable()
export class GroupService {

    groups: Group[];

    constructor(private userservice: UserService) {
        this.createGroups();
    }

    getGroups() {
        return this.createGroups();
    }

    findGroupsByName(name: string) {
        return this.getGroups().filter(group => group.name.match("^" + name));
    }

    findGroupsById(id: number): Group {
        return this.getGroups().find(group => group.id == id);
    }

    private createGroups(): Group[] {
        return this.groups;
    }

}
