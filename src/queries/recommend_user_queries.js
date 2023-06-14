// command sql auto register recommend number

const recommend_number = "INSERT INTO tbl_lottery_recommend_number(user_external_id,lottery_recommend_number,lrn_register_date) VALUES($1, $2, now())";



// command sql show single recommend number
const show_recommend_number = "select user_external_id,lottery_recommend_number from tbl_lottery_recommend_number where user_external_id = $1";


module.exports = {
    recommend_number,
    show_recommend_number
};