const checkphone = "select * from  otp where phone =$1" ;
 const setpassword = "update otp set otp =$2  where phone = $1";

 module.exports ={
   checkphone,
    setpassword,
 };