import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeeResolver } from './employee.resolver';

const routes: Routes = [{
  path:'',
  component:EmployeeListComponent,
  pathMatch:'full'
},{
  path:'employee-edit/:id',
  component:EmployeeEditComponent,
  resolve: {
    emp:EmployeeResolver
  }
},
{
  path:'create-employee',
  component:EmployeeCreateComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
