function App() {
  // App  Logic 
  let  custArrays =  [
    {  custno : 10256, custname:"Scott", loc: "hyd"  },
    {  custno : 10257, custname:"Smith", loc: "delhi"  },
    {  custno : 10258, custname:"Sandy", loc: "chennai"  },
    {  custno : 10259, custname:"Sam", loc: "pune"  }
];

  var productDetails = [
    {pcategory: "outputs" ,pname : "Speakers", pprice : 20000, availunits:10},
    {pcategory: "inputs" ,pname : "mouse", pprice : 5000, availunits:0},
    {pcategory: "inputs" ,pname : "keyboard", pprice : 10000, availunits:7},
    {pcategory: "outputs" ,pname : "printer", pprice : 25000, availunits:5},
    {pcategory: "outputs" ,pname : "monitor", pprice : 12000, availunits:0},
    {pcategory: "inputs" ,pname : "scanner", pprice : 8000, availunits:0},
    {pcategory: "outputs" ,pname : "projector", pprice : 15000, availunits:2},
    {pcategory: "inputs" ,pname : "microphone", pprice : 6000, availunits:15}
  ];


  let res = custArrays.map(items =>{
    return<div>
    <p>Customer id : {items.custno}<br/>
    Customer Name : {items.custname}<br/>
    Location : {items.loc}</p>
    </div>
  });

  let res1 = productDetails.map(items=>{
    return <tr>
      <td>{items.pcategory}</td>
    <td>{items.pname}</td>
    <td>{items.pprice}</td>
    <td>{items.availunits}</td>
    </tr>
  
  });

  return (
     <div>
          <h1>Customers details</h1> 
          <hr/>
          {res}
          <br/>
          <h1>Product Details</h1>
          <hr/>
          <table border="2">
            <tr>
              <th>Product Category</th>
              <th>Product name</th>
              <th>Product price</th>
              <th>Product available units</th>
            </tr>
            {res1}
          </table>
    </div>
  );
}

export default App;