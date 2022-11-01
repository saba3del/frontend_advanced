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
//console.log(productDetails);

exports.getAllProducts = function()
{
    return(productDetails);
}

exports.getCatProducts = function()
{
    let catp = productDetails.filter(item => item.pcategory=="outputs");
    return catp;
}

// exports.getCatProducts = function()
// {
//     let arr1 = [];
//     for(let item in productDetails){
//         if(item.pcategory=="output"){
//             arr1.append(item);
//         }
//     }
// } error not iterable

exports.getRangeProducts = function(){
    let rangep = productDetails.filter(item => item.pprice>10000 && item.pprice<20000);
    return rangep;
}

exports.getnoavailprod = function(){
    let nostock = productDetails.filter(item => item.availunits==0);
    return nostock;
}

exports.getavailprod = function(){
    let instock = productDetails.filter(item => item.availunits!=0);
    return instock;
}

