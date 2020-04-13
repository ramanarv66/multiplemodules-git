import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { EmployeeSalaryComponent } from './employee-salary/employee-salary.component';


const routes: Routes = [
    { path: 'emp', component: EmployeeSalaryComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class EmployeeRoutingModule { }