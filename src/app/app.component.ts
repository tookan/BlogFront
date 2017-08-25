import {Component, OnInit} from '@angular/core';
import {UserService} from './user.service';
import {CookieService} from "angular2-cookie/core";
import {user} from './user';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    public user = new user();
    public loadFlag = false;
    protected token: string;

    constructor(protected cooks: CookieService, protected userService: UserService) {
    }

    ngOnInit() {
        const token = this.cooks.get('token');
        if (token) {
            this.user.token = token;
            this.userService.loginByCookies(token).toPromise()
                .then(response => response.json())
                .then(response => {this.user.username = response.username.toString();
                    this.user.status = response.status.toString();
                })
                .then(() => {
                    this.userService.setSubjUser(this.user, 'root component');
                    this.loadFlag = true;
                })
                .catch(err => console.log(err));
        } else {
            this.loadFlag = true;
        }
    }
}

