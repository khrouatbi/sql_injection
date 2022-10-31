const alasql = require("alasql");
const Koa = require('koa');
const app = new Koa();

const data = [
 { user: "ed8fd34e-3c57-47f9-9cfa-594bb74ca8b5", data: "CREDIT CARD NUMBER 1" },
 { user: "ed8fd34e-3c57-47f9-9cfa-594bb74ca8b5", data: "CREDIT CARD NUMBER 2" },
 { user: "21406f6d-787f-4db2-b02b-d38e3f892133", data: "CREDIT CARD NUMBER 3" }
];


app.use(async ctx => {    
 let user = ctx.request.query.user   
 console.log(user) 
 let res = alasql(`SELECT * from ? where user= ?`, [data,user]);        
 console.log(res)     
 ctx.body = res;
});

app.listen(3000);
