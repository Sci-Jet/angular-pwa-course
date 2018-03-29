
import { Component, OnInit } from '@angular/core';
import { LessonsService } from '../services/lessons.service';
import { Observable } from 'rxjs/Observable';
import { Lesson } from '../model/lesson';

// import { InfoComponent } from './../info/info.component';
// import { MatSnackBar } from '@angular/material';


@Component({
    selector: 'app-lessons',
    templateUrl: './lessons.component.html',
    styleUrls: ['./lessons.component.css']
})
export class LessonsComponent implements OnInit {

    lessons$: Observable<Lesson[]>;
    isLoggedIn$: Observable<boolean>;

    constructor(private lessonsService: LessonsService, ) {


    }

    ngOnInit() {
        this.loadLessons();

    }


    loadLessons() {
        this.lessons$ = this.lessonsService.loadAllLessons().catch(err => Observable.of([]));
    }

}
