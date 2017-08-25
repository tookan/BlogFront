import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {NotesService} from './notes.service';
import {Note} from './note';
import {UserService} from './user.service';
import {user} from './user';
import 'rxjs/add/operator/switchMap';


@Component({
    selector: 'app-note',
    templateUrl: './note.component.html',
    styleUrls: ['./note.component.css'],
})
export class NoteComponent implements OnInit {
    note: Note = new Note;
    err: any;
    loginedUser: user = new user;
    imag: File;
    loadFlag = false;
    editFlag = false;
    updateResponseFlag = true;

    constructor(protected route: ActivatedRoute, protected noteService: NotesService, protected userService: UserService) {
    }

    ngOnInit() {
        this.route.paramMap.switchMap((data: ParamMap) => this.noteService.getOneNote(+data.get('id')))
            .map((response: Response) => response.json())
            .subscribe((response: any) => {
                this.note = response;
                this.loadFlag = true;
            });
        this.userService.getSubjUser().subscribe(user => {
            this.loginedUser = user;
            if (!this.loginedUser) {
                this.editFlag = false;
            }
        });
    }

    setImage(event) {
        this.imag = event.target.files[0];
    }

    sendUpdated() {
        this.note.img = '';
        this.noteService.noteUpdate(this.note, this.imag)
            .subscribe(note => {
                this.err = [];
                    this.editFlag = false;
                    this.note = note.json();
                    this.updateResponseFlag = true;
                    }
                , errs => {
                this.err = [];
                const errors = errs.json();
           for (const key in errors) {
               this.err.push(errors[key]);
           }
            });
    }
}
