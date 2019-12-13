import { Component, OnInit } from '@angular/core';
import {SharingService} from "../service/sharing.service";
import {EmpService} from "../service/emp.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  newEmpName: any;
  newEmpSal: any;
  constructor(private sharingService: SharingService,
              private empService: EmpService) {
    this.sharingService.getEmp$.subscribe(data => {
      if (data) {
        this.newEmpName = data;
      }
    });

    this.empService.getSalary$.subscribe(data => {
      if (data) {
        this.newEmpSal = data;
      }
    });
  }

  ngOnInit() {
  }

}
