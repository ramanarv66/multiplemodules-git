import { GradeComponent } from './grade/grade.component';
import { MarksComponent } from './marks/marks.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentAttendanceComponent } from './student-attendance/student-attendance.component';
const routes: Routes = [
    { path: 'grade', component: GradeComponent },
    { path: 'marks', component: MarksComponent },
    { path: '', component: StudentAttendanceComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StudentRouringModule { }