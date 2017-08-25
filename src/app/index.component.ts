import {Class, Component, OnInit} from "@angular/core";
import {NotesService} from './notes.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';
import {Note} from "./note";

@Component({
    selector: 'app-index',
    templateUrl: 'index.component.html',
    styleUrls: ['index.component.css'],
})

export class IndexComponent implements OnInit {
    notes: Note[];
    page: number;
    public counts: number[] = [];

    constructor(protected notesService: NotesService, protected activeRoute: ActivatedRoute) {
    }

    ngOnInit(): any {
        this.activeRoute.paramMap
            .switchMap((numb: ParamMap) => this.notesService.getAllforAll(numb.get('num')))
            .map((response: Response) => response.json())
            .subscribe((data: any) => {
            this.notes = data.notes;
        const count = +data.pagesCount.original;
        this.counts = [];
                for (let i = 1; i <= count; i++) {
                    this.counts.push(i);
                }
        });
    }
}

