import {Component, OnInit} from '@angular/core';
import {SearchService} from "./search.service";
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/timeoutWith';

@Component({
    selector: 'app-search',
    templateUrl: 'search.component.html',
    styleUrls: ['search.component.css'],
    providers: [SearchService],
})

export class SearchComponent implements OnInit {
    results: object;
    searchTerm = new Subject<string>();


    constructor(protected searchService: SearchService) {
    }

    ngOnInit() {
        this.searchService.search(this.searchTerm)
            .map(response => response.json())
            .subscribe(results => {this.results = results.notes;
           } );
    }
}
