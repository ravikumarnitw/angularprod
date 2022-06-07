import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { Employee } from 'src/models/employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.scss']
})
export class EmployeeCreateComponent implements OnInit {

  employeeDetails: Employee = {id:1, name: '', email: '', phone: '' };

  constructor(private dataService: DataService, private router: Router) {
  }

  ngOnInit(): void {

  }

  addEmployee(dataEmployee: any): void {
    this.dataService.createEmployee(this.employeeDetails).subscribe((data: {}) => {
      this.router.navigate(['']);
    });
  }
}
