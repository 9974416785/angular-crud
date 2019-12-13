import { Component, OnInit } from '@angular/core';
import {EmpService} from '../../service/emp.service';
import {HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-emp-view',
  templateUrl: './emp-view.component.html',
  styleUrls: ['./emp-view.component.scss']
})
export class EmpViewComponent implements OnInit {

  allEmp: any;
  spinner = false;

  empData = [{id: '1', employee_name: 'pihu', employee_salary: '556666', employee_age: '20', profile_image: ''},
    {id: '166033', employee_name: 'AmpROSeYEroPhyst', employee_salary: '123', employee_age: '23', profile_image: ''},
    {id: '166034', employee_name: 'hsjshsh', employee_salary: '799494', employee_age: '466', profile_image: ''},
    {id: '166035', employee_name: '123test', employee_salary: '123', employee_age: '23', profile_image: ''},
    {id: '166037', employee_name: 'km-test-3', employee_salary: '123', employee_age: '23', profile_image: ''},
    {id: '166042', employee_name: 'test', employee_salary: '9999', employee_age: '33', profile_image: ''},
    {id: '166049', employee_name: 'hshsh', employee_salary: '2147483647', employee_age: '466', profile_image: ''},
    {id: '166053', employee_name: 'sas', employee_salary: '1223', employee_age: '11', profile_image: ''}];

  constructor(private empservice: EmpService,
              private router: Router) { }

  ngOnInit() {
    this.getAllEmp();
    this.myFilter();
    this.myMap();
    this.addObj();
  }

  getAllEmp() {
    this.spinner = true;
    this.empservice.getAllEmpList()
      .subscribe(res => {
        this.spinner = false;
        this.allEmp = res;
        // console.log(res, 'employee list');
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

  myFilter() {
    const data = this.empData.filter(res => {
      if (res && res.employee_name === 'test') {
        return res;
      }
    });

    console.log('filter', data);
  }

  myMap() {
    const data = this.empData.map(res => {
      return {id : res.id, name: res.employee_name, umar: res.employee_age};
    });

    console.log('map', data);
  }

  addObj() {
    this.empData.push({id: '007', employee_age: '22', employee_name: 'kels', employee_salary: '22000', profile_image: ''});
    console.log(this.empData,'dddd');
  }

}
