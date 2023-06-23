const showhistory = "SELECT bbl_id, bill_buy_number, bill_price, bill_status, draw_number, " +
" buyer_id, bank_id, bank_bill_refferance, lottery_center_bill_refferance, bbl_register_date " +
 " FROM  tbl_bill_buy_lottery where buyer_id = $1 ";
module.exports ={
    showhistory,
};