import { Component, OnInit } from '@angular/core';
import {EmpService} from "../../service/emp.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-emp-view',
  templateUrl: './emp-view.component.html',
  styleUrls: ['./emp-view.component.scss']
})
export class EmpViewComponent implements OnInit {

  allEmp: any;
  spinner = false;

  constructor(private empservice: EmpService,
              private router: Router) { }

  ngOnInit() {
    this.getAllEmp();
  }

  getAllEmp() {
    this.spinner = true;
    this.empservice.getAllEmpList()
      .subscribe(res => {
        this.spinner = false;
        this.allEmp = res;
        console.log(res, 'employee list');
      }, (err: HttpErrorResponse) => {
        this.spinner = false;
        console.error(err);
      });
  }

  viewEmp(id) {
    this.router.navigate(['/emp-details/', id]);
  }
  updateEmp(id) {
    this.router.navigate(['/emp-update/', id]);
  }

  deleteEmp(id) {
    this.empservice.deleteEmp(id)
      .subscribe(res => {
        console.log(res, 'deleted user');
        this.getAllEmp();
      }, (err: HttpErrorResponse) => {
        console.error(err);
      });
  }

}
