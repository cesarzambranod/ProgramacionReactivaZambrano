import {Component, OnDestroy, OnInit} from '@angular/core';
import {StudentService} from "../services/student.service";
import {Student} from "../model/student";
import {map, Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-student-observable',
  templateUrl: './student-observable.component.html',
  styleUrls: ['./student-observable.component.css']
})
export class StudentObservableComponent implements OnInit, OnDestroy {

  students!: Student[];
  students$!: Observable<Student[]>;
  subscription!: Subscription;

  constructor(private service: StudentService) {
  }

  ngOnInit(): void {

    this.students$ = this.service
      .getStudentsObservable().pipe(
        map(students => {
          return students
            .filter((student: Student) => student.curso === 'Angular')
        })
      );

    this.subscription = this.students$
      .subscribe((students: Student[]) => {
        console.log("getting student list from Observable")
        this.students = students;
      })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
