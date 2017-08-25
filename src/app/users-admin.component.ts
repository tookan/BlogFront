import {Component, OnInit} from '@angular/core';

import {UserService} from './user.service';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Component({
    selector: 'app-users-admin',
    templateUrl: 'users-admin.component.html',
    styleUrls: ['user-admin.component.css'],
})

export class UsersAdminComponent implements OnInit {
    offset = new BehaviorSubject<number>(1);
    notesFlag = false;
    users: any;
    errs: string[];
    loginedUser: any;
    editFlag = false;
    createFlag = false;
    currentUser: any;
    avatar: File;
sortKey = new BehaviorSubject<string>('id');
    constructor(protected userService: UserService) {
    }

    ngOnInit() {
        console.log(this.currentUser);
        this.userService.getAllUsers(this.offset)
            .map((resp: Response) => resp.json())
            .subscribe(users => {
                this.users = users;
            });
        this.userService.getSubjUser()
            .subscribe(usernamus => this.loginedUser = usernamus);
    }

    updateUser() {
        this.userService.updateUser(this.currentUser, this.avatar).subscribe(() => {
            this.editFlag = false;
            this.ngOnInit();
        }, err => {
            this.errs = [];
            const errors = err.json();
            for (let err in errors) {
                this.errs.push(errors[err]);
            }
        });
    }

    deleteUser(): any {
        this.userService
            .deleteUser(this.currentUser.id)
            .subscribe(() => {
                    this.editFlag = false;
                    this.ngOnInit();
                },
                error => console.log(error));
    }
    sortFunc(key) {
        function sorting (f, s) {
            if (f[key] > s[key]) return 1;
            if (f[key] < s[key]) return -1;
return 0;
        }
        this.users.sort(sorting);
    }
    createUser() {
        this.currentUser.pass_repeat = this.currentUser.password;
        this.userService.register(this.currentUser, this.avatar).subscribe(forlog => console.log(forlog));
    }
    setAvatar(event) {
        this.avatar = event.target.files[0];
    }
}
