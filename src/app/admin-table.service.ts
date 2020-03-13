import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IEmployee} from './employee';

@Injectable({
  providedIn: 'root'
})
export class AdminTableService {

  private employeesUrl = 'assets/data/employees.json';
  constructor(private http: HttpClient) { }

  getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this.employeesUrl);
  }
}
