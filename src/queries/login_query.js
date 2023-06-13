const login_check = "SELECT user_internal_id, full_name, user_name, pass_word, user_status, date_register,TO_CHAR(date_register, 'DD-mm-YYYY' ) date_register " +
    " FROM tbl_user_internal where user_name = $1 And pass_word = $2 ";


module.exports = {
    login_check,
};