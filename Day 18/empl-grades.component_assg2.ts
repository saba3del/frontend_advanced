import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empl-grades',
  templateUrl: './empl-grades.component.html',
  styleUrls: ['./empl-grades.component.css']
})
export class EmplGradesComponent {
  
  sno:number = 0;
  ename:string = "";
  grade:number = 0;

  empArray:any[] = [
    {sno: 1, ename : "scott1" , grade : 1},
    {sno: 2, ename : "scott2" , grade : 2},
    {sno: 3, ename : "scott3" , grade : 3},
    {sno: 4, ename : "scott4" , grade : 4},
    {sno: 5, ename : "scott5" , grade : 1},
    {sno: 6, ename : "scott6" , grade : 2},
    {sno: 7, ename : "scott7" , grade : 3},
    {sno: 8, ename : "scott8" , grade : 4},
  ]

}
