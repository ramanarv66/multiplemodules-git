import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeSalaryComponent } from './employee/employee-salary/employee-salary.component';
import { StudentAttendanceComponent } from './student/student-attendance/student-attendance.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  // { path: 'employee', component: EmployeeSalaryComponent },
  // { path: 'student', component: StudentAttendanceComponent },
  // ng generate module customers --route customers --module app.module
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
  { path: 'student', loadChildren: () => import('./student/student.module').then(s => s.StudentModule) },
  { path: 'employee', loadChildren: () => import('./employee/employee.module').then(e => e.EmployeeModule) },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
