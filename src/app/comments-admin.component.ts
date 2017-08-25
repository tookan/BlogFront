import {Component, OnInit} from '@angular/core';
import {comment} from './comment';
import {user} from "./user";
import {Subject} from 'rxjs/Subject';
import {CommentsService} from "./comments.service";
import {UserService} from "./user.service";
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {NgModule} from '@angular/core';

@Component({
    selector: 'app-com-adm',
    templateUrl: 'comments-admin.component.html',
    styleUrls: ['user-admin.component.css'],
})

export class CommentsAdminComponent implements OnInit {
    editFlag = false;
    user = new Subject<user>();
    results: any;
    pagesCount: number;
    offset = new BehaviorSubject(1);
    comments: comment[];
    currentCom: comment;
    createFlag = false;
    searchTerm = new Subject<string>();

    constructor(protected comService: CommentsService, protected userService: UserService) {
    }

    ngOnInit() {
        this.searchForUser();
        this.loadComments();
    }

    protected searchForUser() {
        this.userService.searchByUser(this.searchTerm)
            .subscribe(results => {
                this.results = results.json();
            });
    }

    protected updateComment() {
        this.editFlag = false;
        this.comService.updateComment(this.currentCom).subscribe(resp => {
            console.log(resp);
            this.offset.next(1);
        });
    }

    protected loadComments() {
        this.comService.getCommentsByUser(this.offset, this.user)
            .map( comms => comms.json())
            .subscribe(comms => {
                this.comments = comms.comments;
                this.pagesCount = comms.count;
            });
    }

    protected deleteComment() {
        this.editFlag = false;
        this.comService.deleteComment(this.currentCom).subscribe(resp => {
            console.log(resp);
            this.offset.next(1);
        });
    }

    createComment() {
        this.comService.sendComment(this.currentCom).subscribe(resp => {
            console.log(resp);
            this.createFlag = false;
        });
    }
    newcom(){
        this.createFlag = true;
        this.currentCom = new comment;
    }
}
