import {Component, OnInit} from '@angular/core';
import {StudentService} from "../services/student.service";
import {Student} from "../model/student";

@Component({
  selector: 'app-student-promise',
  templateUrl: './student-promise.component.html',
  styleUrls: ['./student-promise.component.css']
})
export class StudentPromiseComponent implements OnInit {

  students!: Student[];

  constructor(private service: StudentService) {
  }

  ngOnInit(): void {

    this.service.getStudentsPromise().then((students: Student[]) => {
      console.log("getting student list from promise")
      this.students = students;
    }).catch((error: any) => {
      console.log("An error: ", error);
    });
  }
}
