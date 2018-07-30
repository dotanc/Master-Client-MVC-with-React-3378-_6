
let num = 4;

//promise constructor takes as a parameter
//a function (this function takes 2 callbacks as parameters , first for resolve, second for reject)
let prom1 = new Promise((resolve, reject) => {(num == 4)? resolve():reject();});


prom1
.then(()=>console.log("prom1 OK"))  //function for resolve
.catch(()=>console.log("prom1 NOT OK"))  //function for reject



let prom2 = new Promise((resolve, reject) => {(num != 4)? resolve():reject();});

prom2
.then(()=>console.log("prom2 OK"))
.catch(()=>console.log("prom2 NOT OK")) 



/*
OUTPUT:
_______________________
prom1 OK
prom2 NOT OK

*/