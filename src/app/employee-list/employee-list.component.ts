import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Employee } from 'src/models/employee';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  public employes$: Observable<Employee[]>;
  constructor(private dataserv: DataService) {
    this.employes$ = this.dataserv.getEmployess();
    this.employes$.subscribe((data)=>{
      console.log(data);
    });
  }

  ngOnInit(): void {
  }

  public deleteEmployee(id: any): void {
    if (window.confirm('Are you sure, you want to delete?')) {
      this.dataserv.deleteEmployee(id).subscribe((data)=>{
        this.employes$ = this.dataserv.getEmployess();
      });
    }
  }


}
