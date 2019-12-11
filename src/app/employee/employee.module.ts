import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import { EmpViewComponent } from './emp-view/emp-view.component';
import { EmpAddComponent } from './emp-add/emp-add.component';
import {FormsModule} from "@angular/forms";
import {MatIconModule, MatProgressSpinnerModule} from "@angular/material";
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { EmpUpdateComponent } from './emp-update/emp-update.component';



@NgModule({
  declarations: [EmployeeComponent, EmpViewComponent, EmpAddComponent, EmpDetailsComponent, EmpUpdateComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatProgressSpinnerModule
  ]
})
export class EmployeeModule { }
