// ຜູກຂໍ້ມູນເລກແນະນຳກັບຜູ້ໃຊ້
const recommend_number_by_user = "INSERT INTO point_transaction(cust_id,point_ref_id,created_at) VALUES($1, $2, now())";

// ກວດບໍ່ໃຫ້ມີເລກແນະນຳຕຳກັນ
const check_recommend_number_by_user = "SELECT * from point_transaction where cust_id = $1 ";

//check poin
const check_recommend_number_by_poin = "SELECT * from point_transaction where point_ref_id = $1 ";

// ສະແດງເລກແນະນຳຂອງຜູ້ໃຊ້
const show_recommend_number = "select cust_id,point_ref_id from point_transaction where cust_id = $1";
 
// show_recommend_total_point
const show_recommend_total_point = "SELECT  point_last_amount FROM point_transaction where cust_id = $1 ";



module.exports = {
    check_recommend_number_by_user,
    recommend_number_by_user,
    show_recommend_number,
    show_recommend_total_point,
    check_recommend_number_by_poin
};