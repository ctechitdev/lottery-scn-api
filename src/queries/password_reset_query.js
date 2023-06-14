const getidreset = "select * from  tbl_user_external where phone_number =$1" ;
 const setpassword = "update tbl_user_external set pass_word =$2  where phone_number = $1";

 module.exports ={
    getidreset,
    setpassword,
 };