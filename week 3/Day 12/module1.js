var productDetail = require("./productmodule");
let arr =  productDetail.getAllProducts();


console.log("All the products")
 for(let item  of  arr)
 {
	 	 str  =  `Product Category :  ${item.pcategory},  Product Name  :  ${item.pname} , Product Price :  ${item.pprice}, Available units : ${item.availunits}`;
		 console.log(str);
 }

console.log("\nProduct based on category")
let arr1 = productDetail.getCatProducts();
 for(let item  of  arr1)
 {
	 	 str  =  `Product Category :  ${item.pcategory},  Product Name  :  ${item.pname} , Product Price :  ${item.pprice}, Available units : ${item.availunits}`;
		 console.log(str);
 }

console.log("\nProduct based on price range")
let arr2 = productDetail.getRangeProducts();
 for(let item  of  arr2)
 {
	 	 str  =  `Product Category :  ${item.pcategory},  Product Name  :  ${item.pname} , Product Price :  ${item.pprice}, Available units : ${item.availunits}`;
		 console.log(str);
 }

 console.log("\nProducts not available in stock")
let arr3 = productDetail.getnoavailprod();
 for(let item  of  arr3)
 {
	 	 str  =  `Product Category :  ${item.pcategory},  Product Name  :  ${item.pname} , Product Price :  ${item.pprice}, Available units : ${item.availunits}`;
		 console.log(str);
 }

 console.log("\nProducts available in stock")
let arr4 = productDetail.getavailprod();
 for(let item  of  arr4)
 {
	 	 str  =  `Product Category :  ${item.pcategory},  Product Name  :  ${item.pname} , Product Price :  ${item.pprice}, Available units : ${item.availunits}`;
		 console.log(str);
 }

 
