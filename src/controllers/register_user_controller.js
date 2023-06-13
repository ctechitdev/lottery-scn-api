const request = require('express/lib/request');
const connected = require('../../setting/connect');

const queries = require('../queries/register_user_query');


const register_user = (request, respond) => {


    // respond.status(200).json("API Register User");

    const random_password = "123452";

    const{full_name,gender,phone_number} = request.body;

    connected.query(queries.checkphone , [phone_number] , (error , results)=>{
      if (results.rows.length){

        respond.send("this number is exit");

      }else{ 

      
      connected.query(queries.adduser, [full_name, gender,phone_number,random_password] , (error , results)=>{
     
        respond.send("success full");
  
 
    });


      }
    });

      


  };

module.exports = {
    register_user,
    
}