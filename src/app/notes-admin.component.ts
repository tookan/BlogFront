import {Component, OnInit} from '@angular/core';
import {user} from './user';
import {Subject} from 'rxjs/Subject';
import {UserService} from './user.service';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {NotesService} from "./notes.service";
import {Note} from "./note";
import 'rxjs/add/operator/partition';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/do';
import {SearchService} from "./search.service";
import {ActivatedRoute} from "@angular/router";
import {map} from "rxjs/operator/map";
import {switchMap} from "rxjs/operator/switchMap";
import {isUndefined} from "util";

@Component({
    selector: 'notes-admin',
    templateUrl: 'notes-admin.component.html',
    styleUrls: ['user-admin.component.css']
})

export class NotesAdminComponent implements OnInit {
    searchTerm = new Subject<string>();
    editFlag = false;
    currentUser = new Subject<user>();
    notes: Note[] = [];
    resultsUsers: user[];
    resultsNotes: Note[];
    pagesCount: number;
    currentNote: Note;
    imag: File;
    errs: string[];
    offset = new BehaviorSubject(1);
    createFlag = false;

    constructor(protected notesService: NotesService, protected userService: UserService, protected searchService: SearchService,
                protected route: ActivatedRoute) {
    }

    ngOnInit() {
        this.searchForUser();
        this.loadNotes();
        this.route.queryParams
            .subscribe((user: user) => this.currentUser.next(user));
    }

    protected searchForUser() {
        const termSwitch = this.searchTerm.partition(term => term.indexOf('n: ') === 0);
        const notesResults = termSwitch[0]
            .filter(term => term.length > 4)
            .map(term => term.replace('n: ', ''));
        const usersResults = termSwitch[1];
        this.userService.searchByUser(usersResults)
            .subscribe(results => {
                this.resultsUsers = results.json();
            });
        /*this.searchService.search(notesResults)
            .map(data => data.json())
            .subscribe(results => {
                this.notes = results.notes;
                this.pagesCount = results.count;
            });*/
        notesResults.distinctUntilChanged()
            .debounceTime(300)
            .do(() => this.offset.next(1))
            .combineLatest(this.offset)
            .switchMap(data => this.searchService.searchAdmin(data))
            .map(results => results.json())
            .subscribe(data => {
                this.notes = data.notes;
                this.pagesCount = data.count;
            });
    }

    protected loadNotes() {
        this.currentUser
            .filter(user => isUndefined(user.name) === false)
            .combineLatest(this.offset)
            .switchMap(data => this.notesService.getAllByUser(data[0]['name'], data[1]))
            .map(data => data.json())
            .subscribe(notes => {
                this.notes = notes.notes;
                this.pagesCount = notes.pagesCount;
            });
    }

    setImage(event) {
        this.imag = event.target.files[0];
    }

    sendUpdated() {
        this.notesService
            .noteUpdate(this.currentNote, this.imag)
            .subscribe(() => {
                this.editFlag = false;
                this.offset.next(this.offset.value);
            }, err => {
                this.errs = [];
                const errors = err.json();
                for (let err in errors) {
                    this.errs.push(errors[err]);
                }
            });

    }

    createNote() {
        this.notesService.noteCreate(this.currentNote, this.imag).subscribe(forlog => this.createFlag = false,
            err => {
                this.errs = [];
                const errors = err.json();
                for (let err in errors) {
                    this.errs.push(errors[err]);
                }
            });
    }

    delete() {
        this.editFlag = false;
        this.notesService.noteDelete(this.currentNote.id).subscribe(() => this.ngOnInit(), err => {
            this.errs = [];
            const errors = err.json();
            for (let err in errors) {
                this.errs.push(errors[err]);
            }
        });
    }
    newno() {
        this.createFlag = true;
        this.currentNote = new Note;
    }
}
