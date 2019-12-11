import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {EmpUpdateComponent} from "./employee/emp-update/emp-update.component";
import {EmpDetailsComponent} from "./employee/emp-details/emp-details.component";
import {EmpAddComponent} from "./employee/emp-add/emp-add.component";
import {EmpViewComponent} from "./employee/emp-view/emp-view.component";
import {RouterModule, Routes} from "@angular/router";
import {EmployeeModule} from "./employee/employee.module";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

const routes: Routes = [
  { path: '', component: EmpViewComponent },
  { path: 'emp-list', component: EmpViewComponent },
  { path: 'emp-add', component: EmpAddComponent },
  { path: 'emp-details/:id', component: EmpDetailsComponent },
  { path: 'emp-update/:id', component: EmpUpdateComponent }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    EmployeeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
