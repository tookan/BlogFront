import {Injectable, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {Headers} from '@angular/http';
import {user} from './user';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/pluck';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {UserReg} from './register';
import {AbstractService} from "./abstract.service";


@Injectable()

export class UserService extends AbstractService implements OnInit {
    protected static user: user;
    protected static subjUser = new BehaviorSubject<user>(UserService.user);
    public token: string;
constructor (protected http: Http) {
    super();
}
    ngOnInit() {
        this.getSubjUser().subscribe(user => this.token = user.token);
    }

    updateUser(user, avatar: File) {
        const formData = new FormData();
        for (let key in user) {
            formData.append(key, user[key]);
        }
        formData.append('avatar' , avatar)
        const headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Authorization', 'Bearer ' + this.token);
        return this.http.post(this.url() + 'users/update', formData, {headers: headers});
    }

    updateProfile(profile, avatar: File ) {
        const formData = new FormData();
        for (let key in profile) {
            (profile[key] === null) ? profile[key] = '' : profile[key] = profile[key];
            formData.append(key, profile[key]);
        }
        formData.append('avatar', avatar);
        const headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Authorization', 'Bearer ' + this.token);
        return this.http.post(this.url() + 'users/updateProfile', formData, {headers: headers});
    }

    deleteUser(id: number) {
        const headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Authorization', 'Bearer ' + this.token);
        return this.http.post(this.url() + 'users/delete', {'id': id}, {headers: headers});
    }

    getAllUsers(offset: any) {
        return this.getSubjUser()
            .filter(user => user !== UserService.user)
            .pluck('token')
            .map(token => {

                const headers = new Headers();
                headers.append('Accept', 'application/json');
                headers.append('Authorization', 'Bearer ' + token);
                return headers;
            })
            .switchMap(headers => offset
                .switchMap(value => this.http.post(this.url() + 'users/getAll', {'pNum': value}, {headers: headers})));
    }

    login(login: string, password: string) {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.url() + 'users/login', {'name': login, 'password': password}, {headers: headers})
            .map(data => data.json());
    }

    register(user: UserReg, img: File) {
        const formData = new FormData();
        formData.append('avatar', img);
        for (const key in user) {
            formData.append(key, user[key]);
        }
        const headers = new Headers();
        headers.append('Accept', 'application/json');
        return this.http.post(this.url() + 'users/register', formData, {headers: headers});
    }

    loginByCookies(token: string) {
        const headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Authorization', 'Bearer ' + token);
        return this.http.post(this.url() + 'users/cookieslogin', {}, {headers: headers});
    }

    setSubjUser(user: user, emmit: string = 'noone') {
        if (user !== UserService.user) {
            this.token = user.token;
        }
        UserService.subjUser.next(user);
    }

    getSubjUser() {
        return UserService.subjUser;
    }

    searchByUser(searchTerm) {
        return searchTerm
            .filter(term => term.length > 2)
            .distinctUntilChanged()
            .debounceTime(400)
            .switchMap(term => this.search(term));
    }

    search(term) {
        return this.http.get(this.url() + 'users/search/' + term);
    }

}

