import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {UserService} from "./user.service";
import {user} from "./user";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    //styleUrls: ['./navbar.component'],
})
export class NavbarComponent implements OnInit {
    @Input() public loadFlag: boolean;
    public loginedUser: user;
    constructor(protected userService: UserService) {
    }

    ngOnInit() {
        this.userService.getSubjUser().subscribe(user => this.loginedUser = user);
    }
}