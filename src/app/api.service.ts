import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:HttpClient) {}

  getFoodFacts(employee_salary: string): Observable<any> {
    let url = `https://dummy.restapiexample.com/api/v1/employees${ employee_salary }.json`;
    return this.http.get(url);


  }
}