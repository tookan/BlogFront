import {Component, OnInit} from '@angular/core';
import {UserService} from './user.service';
import {UserReg} from "./register";

@Component({
    selector: 'app-register',
    templateUrl: 'register.component.html',
    styleUrls: ['register.component.css'],
})

export class RegisterComponent implements OnInit{
    respon: any;
    img: File;
    user = new UserReg();
    responErr: string[] = [];
    responseFlag = false;

    constructor(protected userServ: UserService) {
    }
    ngOnInit() {}
    setImage(event) {
        this.img = event.target.files[0];
    }
    register() {
    this.userServ.register( this.user, this.img)
.map(response => response)
            .subscribe( () => this.responseFlag = true ,
                error => {
                this.responErr = [];
                const errors  = error.json();
                for (const err in errors) {
                    this.responErr.push(errors[err]);
                }
            });
    }
}
