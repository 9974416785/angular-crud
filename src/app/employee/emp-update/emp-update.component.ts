import { Component, OnInit } from '@angular/core';
import {EmpService} from "../../service/emp.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-emp-update',
  templateUrl: './emp-update.component.html',
  styleUrls: ['./emp-update.component.scss']
})
export class EmpUpdateComponent implements OnInit {
  empName: any;
  empSal: any;
  empAge: any;
  empId: any;
  spinner = false;
  constructor(private empservice: EmpService,
              private router: Router,
              private route: ActivatedRoute,) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.empId = params['id'];
    });
    this.getEmpById();
  }

  getEmpById() {
    this.spinner = true;
    this.empservice.getById(this.empId)
      .subscribe(res => {
        this.spinner = false;
        this.empName =  res.employee_name;
        this.empSal =  res.employee_salary;
        this.empAge =  res.employee_age;
        // this.empData =  res;
        console.log(res, 'get by id');
      }, (err: HttpErrorResponse) => {
        this.spinner = false;
        console.error(err);
      });
  }

  updateEmp() {
    this.spinner = true;
    const empPojo = {
      name: this.empName,
      salary: this.empSal,
      age: this.empAge,
    };
    this.empservice.updateById(this.empId, empPojo)
      .subscribe(res => {
        this.spinner = false;
        this.router.navigate(['/emp-list']);
        console.log(res, 'employee updated...');
      }, (err: HttpErrorResponse) => {
        this.spinner = false;
        console.error(err);
      });

    console.log(empPojo, 'empPojo');

  }

}
