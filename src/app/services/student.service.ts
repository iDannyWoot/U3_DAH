import { newArray } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { Student} from '../model/student'

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private students: Student [] = new Array();

  constructor() {
    this.students.push({
      name: 'Jesus Daniel Gutierrez Aguirre',
      controlnumber: '17400987',
      active: true
    })
    this.students.push({
      name: 'Griselda Barrera',
      controlnumber: '17400509',
      active: true
    })
    this.students.push({
      name: 'Jesus Aguirre',
      controlnumber: '17400988',
      active: false
    })
   }
   getStudents(): Student[]{
     return this.students;
   }
   changeStatus(position: number): void {
    this.students[position].active = !this.students[position].active;
   }
   deleteStudent(position: number): void{
    this.students.splice(position, 1);
   }
   newStudent (Student: Student): void {
    this.students.push(Student);
   }
}
