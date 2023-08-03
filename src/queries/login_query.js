const login_check = "SELECT a.id, firstname, lastname, a.phone, email, dob, gender,otp, image, registration_token"+
"FROM customer a left join otp b on a.id = b.id where otp = $1 ";


module.exports = {
    login_check,
    
};