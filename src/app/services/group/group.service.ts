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
        if (this.groups == null) {
            this.groups = [
                new Group(1, "graffitycrew","test", [
                        this.userservice.findUserById(1)
                    ],
                    this.userservice.findUserById(1)),
                new Group(2, "for a better world","ebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonu",
                    [this.userservice.findUserById(2), this.userservice.findUserById(3), this.userservice.findUserById(4)], this.userservice.findUserById(2)),
                new Group(3, "screwdriver connection","sam et justanctus est Lorem ipsum do", [
                        this.userservice.findUserById(4),
                        this.userservice.findUserById(5)
                    ],
                    this.userservice.findUserById(5)),

                new Group(4, "we are friends","", [
                        this.userservice.findUserById(2)
                    ],
                    this.userservice.findUserById(2)),
                new Group(5, "42","sam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum do", [
                        this.userservice.findUserById(3),
                        this.userservice.findUserById(4),
                        this.userservice.findUserById(5),
                        this.userservice.findUserById(1)
                    ],
                    this.userservice.findUserById(5)),
                new Group(6, "russian friends", "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet", [
                        this.userservice.findUserById(4),
                        this.userservice.findUserById(2)
                    ],
                    this.userservice.findUserById(4)),
                new Group(7, "hildesheim helps", "Lorem Ipsum", [
                        this.userservice.findUserById(1)
                    ],
                    this.userservice.findUserById(1))
            ];
        }
        return this.groups;
    }

}
