import {Injectable} from "@angular/core";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import {AbstractService} from './abstract.service';
import {Http} from "@angular/http";



@Injectable()

export class SearchService extends AbstractService {
    constructor (protected http: Http) {
        super();
    }
    searchTerm: Observable<object []>;
    search(str: any) {
        return str.debounceTime(500)
            .distinctUntilChanged()
            .filter(term => term !== '')
            .switchMap(term => this.request(term));
    }

    request(str: any) {
        return this.http.get(this.url() + 'notes/searchservice/' + str + '/1' );
    }
    searchAdmin(data) {
        return this.http.get(this.url() + 'notes/searchservice/' + data[0] + '/' + data[1]);
    }
}
