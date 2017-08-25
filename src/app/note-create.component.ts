import {Component, OnInit} from '@angular/core';
import {NotesService} from './notes.service';
import {UserService} from "./user.service";
import {Note} from "./note";

@Component({
    selector: 'app-note-create',
    templateUrl: 'note-create.component.html',
    styleUrls: ['note-create.component.css'],
})
export class NoteCreateComponent implements OnInit {
    errorFlag = false;
    note: Note = new Note;
    public loginedUser;
    protected imag: File;
    response: string;
    errorMes: string[]= [];

    constructor(protected notesService: NotesService, protected userService: UserService) {
    }

    ngOnInit() {
        this.userService.getSubjUser().subscribe(user => this.loginedUser = user);
    }

    sendNote() {
        this.notesService.noteCreate(this.note, this.imag)
            .subscribe(response => this.response = response.text(), err => {
            this.errorFlag = true;
            this.errorMes = [];
           const errors = err.json();
            for (let errMes in errors) {
                this.errorMes.push(errors[errMes]);
            }
        });
    }

    setImage(event) {
        this.imag = event.target.files[0];
        if (this.imag.size >= 2000000) {
            this.errorFlag = true;
            this.errorMes.push('Picture size is to big. Choose picture with size less then 5mb');
        }
    }
}
