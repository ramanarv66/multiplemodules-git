import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentAttendanceComponent } from './student-attendance/student-attendance.component';
import { GradeComponent } from './grade/grade.component';
import { MarksComponent } from './marks/marks.component';
import { StudentRouringModule } from './student-routing.module';



@NgModule({
  declarations: [StudentAttendanceComponent, GradeComponent, MarksComponent],
  imports: [
    CommonModule,
    StudentRouringModule
  ]
})
export class StudentModule { }
