import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  id:number=0;
  name:string="";
  price:number=0;
  category:string="";
  qty:number=0;

  public productArray:any[] = []

  getProduct():void{
    this.productArray = [
      {id : 1, name : "prd1", price:1000, category:"cat1", qty:5},
      {id : 2, name : "prd2", price:2000, category:"cat2", qty:3},
      {id : 3, name : "prd3", price:4000, category:"cat3", qty:6},
      {id : 4, name : "prd4", price:6000, category:"cat4", qty:1},
      {id : 5, name : "prd5", price:1000, category:"cat5", qty:3},
      {id : 6, name : "prd6", price:2500, category:"cat6", qty:9}
      ]
  }

  addProduct():void{
    let prodObj:any = {};
    prodObj.id = this.id;
    prodObj.name = this.name;
    prodObj.price = this.price;
    prodObj.category = this.category;
    prodObj.qty = this.qty;

    this.productArray.push(prodObj)
  }

  upProduct(pid:number):void{
    let index = this.productArray.findIndex( item => item.id == pid);
    this.productArray[index].name = this.name;
    this.productArray[index].price = this.price;
    this.productArray[index].category = this.category;
    this.productArray[index].qty = this.qty;
  }

  reset():void{
    this.productArray = []
  }

  selectItem(pid:number):void{
    let prodObj:any = this.productArray.find(item=>item.id==pid);
    this.id = prodObj.id;
    this.name = prodObj.name;
    this.price = prodObj.price;
    this.category = prodObj.category;
    this.qty = prodObj.qty;
  }

  deleteItem(pid:number):void{
    let index  = this.productArray.findIndex( item => item.id == pid);
    this.productArray.splice(index,1);
  }

}


