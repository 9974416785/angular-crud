import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {EmpService} from "../../service/emp.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-emp-add',
  templateUrl: './emp-add.component.html',
  styleUrls: ['./emp-add.component.scss']
})
export class EmpAddComponent implements OnInit {
  empName: any;
  empSal: any;
  empAge: any;
  constructor(private empservice: EmpService,
              private router: Router) { }

  ngOnInit() {
  }

  addEmp() {
    const empPojo = {
      name: this.empName,
      salary: this.empSal,
      age: this.empAge,
    };
    this.empservice.addEmp(empPojo)
      .subscribe(res => {
        this.router.navigate(['/emp-list']);
        console.log(res, 'employee added...');
      }, (err: HttpErrorResponse) => {
        console.error(err);
      });

    console.log(empPojo, 'empPojo');

  }

}
