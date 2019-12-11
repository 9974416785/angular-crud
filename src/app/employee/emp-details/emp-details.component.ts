import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {EmpService} from "../../service/emp.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Location} from '@angular/common';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.scss']
})
export class EmpDetailsComponent implements OnInit {
  empId: any;
  spinner = false;
  empData: any;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private empservice: EmpService,
              private location: Location) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.empId = params['id'];
    });
    this.getEmpById();
    console.log(this.empId);
  }

  getEmpById() {
    this.spinner = true;
    this.empservice.getById(this.empId)
      .subscribe(res => {
        this.spinner = false;
        this.empData =  res;
        console.log(res, 'get by id');
      }, (err: HttpErrorResponse) => {
        this.spinner = false;
        console.error(err);
      });
  }

  goBack() {
    this.location.back();
  }

}
