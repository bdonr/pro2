import {Injectable} from '@angular/core';
import {User} from "../../components/entities/User";
import {BehaviorSubject, Observable, Observer, Subject} from "rxjs";
import {debounceTime} from "rxjs/operator/debounceTime";
import {Http, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map'
import {AuthService} from "../auth/auth.service";
import {ObjectId} from "../../components/entities/ObjectId";
import {Login} from "../../components/entities/Login";
import {Login2} from "../../components/entities/Login2";


@Injectable()
export class UserService {
    users: User[];
    user: User;
    adr:string = 'http://192.168.178.100/rest';

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
        return this.http.get(this.adr+'/user/search/'+name).map(res=>res.json());

    }

    findUserByEmail(email: string) {
        return this.http.get(this.adr+'/user/email/'+email).map(res=> res.json());
    }


    findUserByUsername(username: string) {
        return this.http.get(this.adr+'/user/name/'+username).map(res=>res.json());
    }


    register(user:User) {
        return this.http.put(this.adr+'/user/',user).map(res=>res.json());
    }

    login(user:Login){
        console.log(user);
        return this.http.put(this.adr+'/login',user);
    }
    login2(user2:Login2){
        console.log(user2);
        return this.http.put(this.adr+'/login',user2);
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
