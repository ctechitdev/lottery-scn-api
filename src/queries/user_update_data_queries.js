// command sql select single user data
const show_user_data = "select gender,full_name,phone_number,user_status from tbl_user_external where user_external_id = $1";



// command sql update user data

const update_user_data = "update tbl_user_external set gender = $2,full_name = $3,phone_number = $4, pass_word = $5, user_status = $6 where user_external_id = $1";


module.exports = {
    show_user_data,
    update_user_data,
};