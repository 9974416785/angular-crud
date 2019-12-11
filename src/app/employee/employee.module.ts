import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import { EmpViewComponent } from './emp-view/emp-view.component';
import { EmpAddComponent } from './emp-add/emp-add.component';
import { EmpUpdateComponent } from './emp-update/emp-update.component';
import { EmpDetailsComponent } from './emp-details/emp-details.component';



@NgModule({
  declarations: [EmployeeComponent, EmpViewComponent, EmpAddComponent, EmpUpdateComponent, EmpDetailsComponent],
  imports: [
    CommonModule
  ]
})
export class EmployeeModule { }
