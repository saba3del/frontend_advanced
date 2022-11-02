import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';
import { EmpsComponent } from './emps/emps.component';
import { LogOutComponent } from './log-out/log-out.component';
import { LoginComponent } from './login/login.component';
import { ProdDetailsComponent } from './prod-details/prod-details.component';
import { ProductComponent } from './product/product.component';
import { StudentsComponent } from './students/students.component';

const routes:Routes=[
  {path:"login",component:LoginComponent},
  {path:"emps",component:EmpsComponent, canActivate : [AuthGuardService]},
  {path:"products",component:ProductComponent, canActivate : [AuthGuardService]},
  {path:"prodDetails/:id",component:ProdDetailsComponent},
  {path:"logout", component:LogOutComponent},
  {path:"students",component:StudentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
