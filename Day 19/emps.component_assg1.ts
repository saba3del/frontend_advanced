import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-emps',
  templateUrl: './emps.component.html',
  styleUrls: ['./emps.component.css']
})
export class EmpsComponent {

  public productArray:any[] = [];
  constructor(private prodObj:DataService){

  }
  public btn()
  {
    this.productArray = this.prodObj.getProduct(); 
  }
}
