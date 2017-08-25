import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from "./user.service";
import {user} from "./user";

@Component({
    selector: 'app-admin',
    templateUrl: 'admin.component.html',
    styleUrls: [],
})

export class AdminComponent implements OnInit {
    loginedUser: user;

    constructor(protected router: ActivatedRoute, protected userService: UserService) {
    }

    ngOnInit() {
        this.userService.getSubjUser()
            .subscribe(user => this.loginedUser = user);
    }
}
