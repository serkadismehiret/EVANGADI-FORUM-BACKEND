let mysql2 = require("mysql2");

let dbConnection = mysql2.createPool({
  user: process.env.USER,
  database: process.env.DATABASE,
  host: process.env.HOST,
  password: process.env.PASSWORD,
  connectionLimit: process.env.LILMIT,
});

// dbConnection.execute("select'test' ",(err,result) => {
// if(err){
// console.log(err.message)
// }else{
// console.log(result)
// }
// })
module.exports = dbConnection.promise();
