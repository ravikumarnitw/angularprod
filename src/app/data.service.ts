import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from 'src/models/employee';
import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiUrl = 'http://localhost:3000';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private http: HttpClient) {}

  getEmployess(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl + '/employees').pipe(retry(1));
  }

  getEmployee(id: string): Observable<Employee> {
    return this.http.get<Employee>(this.apiUrl+'/employees/'+ id  );
  }

  deleteEmployee(id: string): Observable<Employee> {
    return this.http.delete<Employee>(this.apiUrl + '/employees/'+ id, this.httpOptions).pipe(retry(1));
  }

  createEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.apiUrl + '/employees', JSON.stringify(employee), this.httpOptions);
  }

  updateEmployee(id: string, employee: Employee): Observable<Employee> {
   return this.http.put<Employee>(this.apiUrl+ '/employees/'+ id, JSON.stringify(employee), this.httpOptions);
  }

}
