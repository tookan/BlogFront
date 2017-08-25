import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserService} from "./user.service";
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'profile-edit',
    templateUrl: 'user-profile.component.html',
})

export class ProfileCreateComponent {
   @Input() profile;
   @Output() close = new EventEmitter();
   avatar: File;
    constructor (protected userService: UserService, protected route: ActivatedRoute) {}
    sendData() {
        this.userService.updateProfile(this.profile, this.avatar).subscribe(() => this.close.emit(true));
    }
    setAvatar(event) {
        this.avatar = event.target.files[0];
    }
}
