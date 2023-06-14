const login_check = "SELECT user_external_id, gender, full_name, phone_number, pass_word, user_status, date_register,TO_CHAR(date_register, 'DD-mm-YYYY' ) date_register " +
    " FROM tbl_user_external where phone_number = $1 And pass_word = $2 ";
const login_select = "SELECT user_external_id, gender, full_name, phone_number, pass_word, user_status, date_register,TO_CHAR(date_register, 'DD-mm-YYYY' ) date_register " +
" FROM tbl_user_external ";

module.exports = {
    login_check,
    login_select,
};