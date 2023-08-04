const login_check = "SELECT a.id, otp  FROM customer a left join otp b on a.id = b.id where a.phone = $1 ";


module.exports = {
    login_check,
    
};