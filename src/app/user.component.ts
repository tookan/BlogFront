import {Component, OnInit} from "@angular/core";
import {UserService} from "./user.service";
import {NotesService} from "./notes.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Note} from "./note";
import {user} from "./user";
import {UserProfile} from "./UserProfile";

@Component({
    selector: 'app-user',
    templateUrl: 'user.component.html',
    styleUrls: ['user.component.css'],
})

export class UserComponent implements OnInit {
    notes: Note[];
    loginedUser: user = new user;
    userProfile: UserProfile = new UserProfile;
    pagesCount;
    username = '';
    counts: Number[] = [];
    deletePreventFlag = false;
    editFlag = false;
    currentTitle: string;
    currentId: number;
    constructor(protected userService: UserService, protected notesService: NotesService, protected link: ActivatedRoute) {
    }

    ngOnInit() {
        this.userService.getSubjUser().subscribe(user => {
            this.loginedUser = user;
        });
        this.link.paramMap.switchMap((data: ParamMap) => this.notesService
            .getAllByUser(this.username = data.get('username'), +data.get('page')))
            .map(data => data.json())
            .subscribe((data: any) => {
                this.notes = data.notes;
                this.userProfile = data.profile;
                const count = +data.pagesCount;
                this.counts = [];
                for (let i = 1; i <= count; i++) {
                    this.counts.push(i);
                }
            });
    }

    deleteNote() {
        this.notesService.noteDelete(this.currentId).subscribe(() => this.ngOnInit());
    }
}
