
let num = 4;

//promise constructor takes as a parameter
//a function (this function takes 2 callbacks as parameters , first for resolve, second for reject)
let prom1 = new Promise((resolve, reject) => {(num == 4)? resolve("prom1 OK"):reject("prom1 NOT OK");});


prom1
.then((x)=>console.log(x))  //function for resolve
.catch((y)=>console.log(y))  //function for reject


let prom2 = new Promise((resolve, reject) => {(num != 4)? resolve("prom2 OK"):reject("prom2 NOT OK");});

prom2
.then((x)=>console.log(x))
.catch((y)=>console.log(y)) 



/*
OUTPUT:
_______________________
prom1 OK
prom2 NOT OK

*/