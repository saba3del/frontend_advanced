import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-empl-http',
  templateUrl: './empl-http.component.html',
  styleUrls: ['./empl-http.component.css']
})
export class EmplHttpComponent {

  public empArray:any[] = [];

  constructor(private empObj:HttpClient){
    let url = "http://localhost:3000/empDetails";
    this.empObj.get(url).subscribe((response:any)=>
    {
      console.log(response);
      this.empArray = response;
    })
    
  }

  
}
