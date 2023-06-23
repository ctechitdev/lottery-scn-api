const showhistory = "SELECT bbl_id, bill_buy_number, bill_price, bill_status, draw_number, " +
    " buyer_id, bank_id, bank_bill_refferance, lottery_center_bill_refferance, bbl_register_date " +
    " FROM  tbl_bill_buy_lottery where buyer_id = $1 ";


const insert_data = "insert into tbl_bill_buy_lottery_detail ( bbl_id, draw_number, lottery_number, lottery_price) values ('1','1',$1,$2)";


module.exports = {
    showhistory,
    insert_data,
};