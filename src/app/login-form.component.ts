import {Component, OnInit} from "@angular/core";
import {UserService} from "./user.service";
import {user} from "./user";
import {CookieService} from "angular2-cookie/core";

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
    loginedUser: user = new user;
    errorApi: string;

    constructor(protected userService: UserService, protected cooks: CookieService) {
    }

    ngOnInit() {
        this.userService.getSubjUser().subscribe(user => {
            this.loginedUser = user;
        });
    }

    submitData(username: string, password: string) {
        this.userService.login(username, password)
            .subscribe(data => {
                    this.userService.setSubjUser(data.response);
                    this.errorApi = null;
                    this.setcookie(data.response.token);
                },
                error => this.errorApi = error.json().errorApi);
    }

    logOut() {
        delete this.loginedUser;
        this.cooks.remove('token');
        this.userService.setSubjUser(this.loginedUser);
    }

    protected setcookie(token: string) {
        return this.cooks.put('token', token);
    }
}
