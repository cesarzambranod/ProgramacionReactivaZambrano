import {Injectable} from '@angular/core';
import {Student} from "../model/student";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private students: Student[] = [
    {
      id: 1,
      nombre: 'Pedro',
      apellido: 'Perez',
      curso: 'Angular',
      correo: 'pperez@test.com',
      inicio: new Date(2023, 1, 1),
    },
    {
      id: 2,
      nombre: 'Carlos',
      apellido: 'Campins',
      curso: 'Vue',
      correo: 'ccampins@test.com',
      inicio: new Date(2023, 2, 2),
    },
    {
      id: 3,
      nombre: 'Roberto',
      apellido: 'Quero',
      curso: 'ReactJS',
      correo: 'rquero@test.com',
      inicio: new Date(),
    }
  ]

  constructor() {
  }

  getStudentsPromise(): Promise<Student[]> {
    return new Promise((resolve, reject) => {
      if (this.students.length > 0) {
        resolve(this.students);
      } else {
        reject([{
          error: "Student list is empty"
        }]);
      }
    });
  }

  getStudentsObservable(): Observable<Student[]> {
    return new Observable<Student[]>((subscriber) => {
      setTimeout(() => {
        console.log("Simulating Fetching student list...")
        subscriber.next(this.students);
      }, 1000);

    })
  }
}
