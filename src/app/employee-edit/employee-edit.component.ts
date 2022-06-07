import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { Employee } from 'src/models/employee';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.scss']
})
export class EmployeeEditComponent implements OnInit {

  emp: Employee;
  employeeForm: any;
  constructor(private fb: FormBuilder, public activeRoute: ActivatedRoute,public router: Router, private dataService: DataService) {
    this.emp = this.activeRoute.snapshot.data.emp;
    this.employeeForm = this.fb.group({id: [this.emp.name, Validators.required],
      name: [this.emp.id, Validators.required],
      email: [this.emp.name, Validators.required],
      phone: [this.emp.phone, Validators.required]});
  }

  ngOnInit(): void {
  }

  onFormSubmit(): void{
    console.log(this.employeeForm.value);
    this.dataService.updateEmployee(this.emp.id.toString(), this.employeeForm.value as Employee).subscribe(
      (data)=>{
        this.router.navigate(['']);
      }
    );
  }

}
