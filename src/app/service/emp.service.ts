import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs/index";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  getSalary$: Observable<any>;
  private salarySubject = new Subject<any>();

  constructor(private http: HttpClient) {
    this.getSalary$ = this.salarySubject.asObservable();
  }

  getAllEmpList(): Observable<any> {
    return this.http.get(environment.baseUrl + '/employees');
  }

  addEmp(data): Observable<any> {
    return this.http.post(environment.baseUrl + '/create', data);
  }

  getById(id): Observable<any> {
    return this.http.get(environment.baseUrl + '/employee/' + id);
  }

  updateById(id, data): Observable<any> {
    return this.http.put(environment.baseUrl + '/update/' + id, data);
  }

  deleteEmp(id): Observable<any> {
    return this.http.delete(environment.baseUrl + '/delete/' + id);
  }

  setSalary(data) {
    this.salarySubject.next(data);
  }

}
