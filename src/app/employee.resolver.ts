import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Employee } from 'src/models/employee';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeResolver implements Resolve<Employee> {

  constructor(private dataService: DataService){

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Employee>{

    return this.dataService.getEmployee(route.params['id']);
  }
}
