import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  public userArray:any[] = [];
  public customerArray:any[] = [];

  constructor(private httpObj:HttpClient){
    
  }

  public btn1(){
    let url = "https://reqres.in/api/users ";
    this.httpObj.get(url).subscribe((response:any)=>
    {
      //console.log(response.data);
      this.userArray = response.data;
    })
  }

  public btn2(){
    let url2 ="https://www.w3schools.com/angular/customers.php";
    this.httpObj.get(url2).subscribe((response2:any)=>
    {
      //console.log(response.data);
      this.customerArray = response2.records;
    })
  }
}
