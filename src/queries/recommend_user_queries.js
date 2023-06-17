// command sql auto register recommend number

const recommend_number = "INSERT INTO tbl_lottery_recommend_number(user_external_id,lottery_recommend_number,lrn_register_date) VALUES($1, $2, now())";


// command sql show single recommend number
const show_recommend_number = "select user_external_id,lottery_recommend_number from tbl_lottery_recommend_number where user_external_id = $1";

// join_recommend_number_sub_user
const recommend_number_sub_user = "INSERT INTO tbl_recommend_point_amount(recommender_id,buyer_id,point_recieve,rpa_register_date) VALUES($1, $2,$3,now())";

// show_recommend_total_point
const show_recommend_total_point = "SELECT recommender_id,sum(point_recieve)as point FROM tbl_recommend_point_amount where recommender_id=$1  group by recommender_id";


module.exports = {
    recommend_number,
    show_recommend_number,
    recommend_number_sub_user,
    show_recommend_total_point
};