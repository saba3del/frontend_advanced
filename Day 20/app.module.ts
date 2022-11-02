import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DemoComponent } from './demo/demo.component';
import { DeptsComponent } from './depts/depts.component';
import { EmpsComponent } from './emps/emps.component';
import { SicalcComponent } from './sicalc/sicalc.component';
import { ProductComponent } from './product/product.component';
import { StudentsComponent } from './students/students.component';
import { EmplGradesComponent } from './empl-grades/empl-grades.component';
import { GradepipePipe } from './gradepipe.pipe';
import { SpliceConceptComponent } from './splice-concept/splice-concept.component';
import { UsersComponent } from './users/users.component';
import { EmplHttpComponent } from './empl-http/empl-http.component';
import { CrudOperationsComponent } from './crud-operations/crud-operations.component';
import { ProdDetailsComponent } from './prod-details/prod-details.component';
import { LogOutComponent } from './log-out/log-out.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DemoComponent,
    DeptsComponent,
    EmpsComponent,
    SicalcComponent,
    ProductComponent,
    StudentsComponent,
    EmplGradesComponent,
    GradepipePipe,
    SpliceConceptComponent,
    UsersComponent,
    EmplHttpComponent,
    CrudOperationsComponent,
    ProdDetailsComponent,
    LogOutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
