import {Injectable} from "@angular/core";
import 'rxjs/add/operator/toPromise';
import {Headers, Http} from "@angular/http";
import {Note} from "./note";
import {AbstractService} from "./abstract.service";
import {UserService} from "./user.service";
import {isUndefined} from "util";




@Injectable()
export class NotesService extends AbstractService {
    notes: object;
    protected token;
    constructor(protected userService: UserService, protected http: Http) {
        super();
    }

    getAllforAll(page: any): any {
        return this.http.get(this.url() + 'notes/getallbyall/' + page);
    }

    getAllByUser(username, page = 1) {
        return this.http.get(this.url() + 'notes/user/' + username + '/' + page);
    }

    getOneNote(id: number): any {
        return this.http.get(this.url() + 'notes/getonenote/' + id);
    }

    getPagesCount() {
        return this.http.get(this.url() + 'notes/getpagescount');
    }

    noteCreate(note: Note, imag: File) {
        this.token = this.userService.token;
        const formData = new FormData();
        formData.append('photo', imag);
        for (const key in note) {
            formData.append(key, note[key]);
        }
        const headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Authorization', 'Bearer ' + this.token);
        return this.http.post(this.url() + 'notes/notecreate', formData, {headers: headers});
    }

    noteUpdate(note: Note, imag: File) {
        this.token = this.userService.token;
        this.userService.getSubjUser().subscribe(user => {
            if (!isUndefined(user.token)) {
                this.token = user.token;
            }else this.token = '';
        });
        const formData = new FormData();
        formData.append('photo', imag);
        for (const key in note) {
            formData.append(key, note[key]);
        }
        const headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Authorization', 'Bearer ' + this.token);
        return this.http.post(this.url() + 'notes/noteupdate', formData , {headers: headers});
    }

    noteDelete(id) {
        this.token = this.userService.token;
        const headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Authorization', 'Bearer ' + this.token);
        return this.http.post(this.url() + 'notes/notedelete', {'id': id}, {headers: headers});
    }
}
