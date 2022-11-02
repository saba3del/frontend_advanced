import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prod-details',
  templateUrl: './prod-details.component.html',
  styleUrls: ['./prod-details.component.css']
})
export class ProdDetailsComponent implements OnInit { 
  prodObj:any = {};

  public productArray:any[] = [
      {id : 1, name : "prd1", price:1000, category:"cat1", qty:5},
      {id : 2, name : "prd2", price:2000, category:"cat2", qty:3},
      {id : 3, name : "prd3", price:4000, category:"cat3", qty:6},
      {id : 4, name : "prd4", price:6000, category:"cat4", qty:1},
      {id : 5, name : "prd5", price:1000, category:"cat5", qty:3},
      {id : 6, name : "prd6", price:2500, category:"cat6", qty:9}
      ];
  
  constructor(private  activatedRouteObj: ActivatedRoute) { }

  ngOnInit(): void {
    let pno = this.activatedRouteObj.snapshot.params["id"];
    this.prodObj =  this.productArray.find(item => item.id == pno);
  }

}
