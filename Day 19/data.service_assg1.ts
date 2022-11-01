import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //public productArray:any[] = []

  getProduct():any[]{
    let productArray:any[] = [
      {id : 1, name : "prd1", price:1000, category:"cat1", qty:5},
      {id : 2, name : "prd2", price:2000, category:"cat2", qty:3},
      {id : 3, name : "prd3", price:4000, category:"cat3", qty:6},
      {id : 4, name : "prd4", price:6000, category:"cat4", qty:1},
      {id : 5, name : "prd5", price:1000, category:"cat5", qty:3},
      {id : 6, name : "prd6", price:2500, category:"cat6", qty:9}
      ]

      return productArray
  }
}
