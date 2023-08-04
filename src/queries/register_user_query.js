
//add and check
const adduser = "INSERT INTO customer (firstname,lastname, gender, phone,email,dob,image,registration_token ) values ($1,$2,$3,$4,$5,$6,$7,$8)";
const checkuser ="SELECT * FROM customer where phone  = $1  "

module.exports = {
 
    adduser,
    checkuser,
    

};