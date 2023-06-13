const searchall = "SELECT * FROM tbl_user_external ";
const adduser = "INSERT INTO tbl_user_external (full_name, gender, phone_number, pass_word, user_status, date_register) values ($1,$2,$3,$4,'1',now())";
const checkphone ="SELECT * FROM tbl_user_external where phone_number = $1"

module.exports = {
    searchall,
    adduser,
    checkphone,

};