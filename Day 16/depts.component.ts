import { Component, OnInit } from '@angular/core';
import { DeptModel } from '../models/DeptModel';

@Component({
  selector: 'app-depts',
  templateUrl: './depts.component.html',
  styleUrls: ['./depts.component.css']
})
export class DeptsComponent 
{
    public deptsArray:DeptModel[]  = [
      {deptno : 10, dname : "Accounts",  loc :  "Hyd"} ,
      {deptno : 20, dname : "Sales",  loc :  "Pune"},
      {deptno : 30, dname : "Marketing",  loc :  "Hyd"},
      {deptno : 40, dname : "Operations",  loc :  "Chnnai"},
      {deptno : 50, dname : "Admin",  loc :  "Pune"},
      {deptno : 60, dname : "Finance",  loc :  "Hyd"},
      {deptno : 70, dname : "Testing",  loc :  "Mumbai"}
    ];
}



