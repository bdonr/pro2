import {Injectable} from '@angular/core';
import {User} from "../../components/entities/User";
import {BehaviorSubject, Observable, Observer, Subject} from "rxjs";
import {debounceTime} from "rxjs/operator/debounceTime";
import {Http, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map'
import {AuthService} from "../auth/auth.service";
import {ObjectId} from "../../components/entities/ObjectId";


@Injectable()
export class UserService {
    users: User[];
    user: User;
    adr:string = 'http://192.168.178.24/rest';

    constructor(public http: Http) {
        console.log("erstekkt");
    }

    getAllUser(): Observable<User[]> {
        return this.getUsers();
    }

    findUserById(id: string) {
            return this.http.get(this.adr+'/user/id/'+id).map(res=>res.json());
    }
    findUserByName(name:string){
        console.log(this.http.get(this.adr+'/search/'+name));
        return this.http.get(this.adr+'/user/search/'+name).map(res=>res.json());

    }

    findUserByEmail(email: string) {

        console.log("email", email);
        this.getUsers().subscribe(users => {
            this.user = users.find(profile => profile.email == email);
            console.log("jhgj", this.user);
        });
    }


    findUserByEmailandPassword(email: string, password: string): User {
        this.findUserByEmail(email);
        console.log("user", this.user);
        if (this.user.pwd === password) {
            return this.user;
        }
        return null;

    }



    getUsers() {
        return this.http.get(this.adr+'/user/').map(res=>res.json());
    }

    addUser(user:User): Observable<User[]> {
        return this.http.put(this.adr+'/user/', user).map(r => r.json());
    }



    /**
     getUsers2() {
        return this.http.get('https://192.168.178.24/user').map(res => res.json());
    }

     setUser(user:User) {
         return this.http.post('https://jsonplaceholder.typicode.com/users',user);
    }
     **/

}
