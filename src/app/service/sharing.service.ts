import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class SharingService {
getEmp$: Observable<any>;

private empSubject = new Subject<any>();
  constructor() {
    this.getEmp$ = this.empSubject.asObservable();
  }

  setEmpName(data) {
    this.empSubject.next(data);
  }
}
