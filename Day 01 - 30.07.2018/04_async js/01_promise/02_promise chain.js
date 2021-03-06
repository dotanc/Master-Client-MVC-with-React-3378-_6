
let str="tset1";
str.toLocaleLowerCase().toUpperCase().indexOf('a');  //chaining string functions

let num = 4;
let prom1 = new Promise((resolve, reject) => {(num == 4)? resolve("prom1 OK"):reject("prom1 NOT OK");});


prom1
.then((x)=>console.log(x))  //function for resolve -> EVERY THEN RETURNS A NEW PROMISE (VOID PROMISE BY DEFAULT)
.then(()=>console.log("Chained promise")) 
.catch((y)=>console.log(y))  //function for reject


/*
OUTPUT:
_______________________________

prom1 OK
Chained promise
*/