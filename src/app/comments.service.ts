import {Injectable, OnInit} from "@angular/core";
import {Http} from '@angular/http';
import {UserService} from './user.service';
import {Headers} from '@angular/http';
import 'rxjs/add/operator/combineLatest';
import 'rxjs/add/operator/merge';
import {Observable} from 'rxjs/Observable';
import {AbstractService} from "./abstract.service";



@Injectable()
export class CommentsService extends AbstractService {
    protected token;
constructor(protected userService: UserService, protected http: Http) {
    super();
}
    getComments(noteId: number) {
        return this.http.get(this.url() + 'comments/getcomments/' + noteId);
    }

    sendComment(comment) {
        this.token = this.userService.token;
        const headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Authorization', 'Bearer ' + this.token);
        return this.http.post(this.url() + 'comments/sendcomment', comment, {headers: headers});
    }


    getCommentsByUser(offset, userId) {
        let combiner = new Observable();
        userId = userId.filter(id => id !== '' || null);
        combiner = userId.combineLatest(offset);
        return combiner.switchMap(data => this.http.post(this.url() + 'comments/user', {'offset': data[1], 'id': data[0]}));
    }

    updateComment(comm) {
        this.token = this.userService.token;
        const headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Authorization', 'Bearer ' + this.token);
        return this.http.post(this.url() + 'comments/update', comm, {headers: headers});
    }

    deleteComment(comm) {
        this.token = this.userService.token;
        const headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Authorization', 'Bearer ' + this.token);
        return this.http.post(this.url() + 'comments/delete', comm, {headers: headers});
    }
}
