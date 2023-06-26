// ຜູກຂໍ້ມູນເລກແນະນຳກັບຜູ້ໃຊ້
const recommend_number_by_user = "INSERT INTO tbl_lottery_recommend_number(user_external_id,lottery_recommend_number,lrn_register_date) VALUES($1, $2, now())";

// ກວດບໍ່ໃຫ້ມີເລກແນະນຳຕຳກັນ
const check_recommend_number_by_user = "SELECT * from tbl_lottery_recommend_number where user_external_id = $1 ";

// ດຶງຂໍ້ມູນຜູ້ແນະນຳຜ່ານເລກແນະນຳ
const check_recommend_number_code = "SELECT * from tbl_lottery_recommend_number where lottery_recommend_number = $1 ";

// ສະແດງເລກແນະນຳຂອງຜູ້ໃຊ້
const show_recommend_number = "select user_extsernal_id,lottery_recommend_number from tbl_lottery_recommend_number where user_external_id = $1";

//ກວດສອບການຜູກເລກແນະນຳ
const check_join_recommender_buyer = "select * from tbl_join_recommend_number where recommender_id =$1 and user_recommend_id = $2 ";


// ຜູກຜູ້ແນະນຳເຂົ້າກັບຜູ້ໃຊ້
const join_recommender_with_buyer_by_recommend_code = "INSERT INTO tbl_join_recommend_number(recommender_id,user_recommend_id,date_join) VALUES($1, $2,now())";

// show_recommend_total_point
const show_recommend_total_point = "SELECT recommender_id,sum(point_recieve)as point FROM tbl_recommend_point_amount where recommender_id = $1  group by recommender_id";


module.exports = {
    check_recommend_number_by_user,
    recommend_number_by_user,
    check_recommend_number_code,
    show_recommend_number,
    check_join_recommender_buyer,
    join_recommender_with_buyer_by_recommend_code,
    show_recommend_total_point
};