import {Component, DoCheck, Input, OnInit} from "@angular/core";
import {CommentsService} from './comments.service';
import {comment} from './comment';
import {UserService} from "./user.service";
import {user} from './user';
import {Observable} from "rxjs/Observable";
import {isUndefined} from "util";

@Component({
    selector: 'app-comments',
    templateUrl: 'comments.component.html',
    styleUrls: ['comments.component.css']
})

export class CommentsComponent implements OnInit {
    @Input()
    set noteId(noteId: number) {
        this.loadComments(noteId);
        this.noteID = noteId;
    }

    loginedUser: user;
    noteID: number;
    comment = new comment();
    public comments: comment[] = [];

    constructor(protected commentsService: CommentsService, protected userService: UserService) {
    }

    ngOnInit() {
        this.userService.getSubjUser().subscribe(user => this.loginedUser = user);
    }

    loadComments(noteId) {
        this.commentsService.getComments(noteId)
            .map(data => data.json() as comment[])
            .subscribe(coms => this.comments = coms);
    }

    sendComment() {
        this.comment.note_id = this.noteID;
        if (!isUndefined(this.comment.body)) {
            this.commentsService.sendComment(this.comment)
                .map(data => data.json() as comment[])
                .subscribe(() => {
                    this.loadComments(this.noteID);
                    this.comment.body = '';
                }, err => {
                });
        }
    }
}
