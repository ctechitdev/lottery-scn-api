const request = require('express/lib/request');
const connected = require('../../setting/connect');

const queries = require('../queries/password_reset_query');


const reset_password = (request, respond) => {
   // respond.status(200).json("API reset password");   
   
   const { phone_number,password } = request.body;
 
   connected.query(queries.getidreset, [phone_number], (error, results) => {
     const checkpass = !results.rows.length;
     if (checkpass) {
       respond.send("ບໍ່ມີໃນລະບົບ");
     }else{
     connected.query(queries.setpassword, [phone_number,password], (error, results) => {
       if (error) throw error;
       respond.status(200).send("ປ່ຽນລະຫັດສຳເລັດ");
     
     });
    }
   });






}


module.exports = {
    reset_password,
}