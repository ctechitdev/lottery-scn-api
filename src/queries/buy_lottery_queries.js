const addlottery = "insert into tbl_bill_buy_lottery (bill_buy_number,bill_price,"+
    "draw_number,bill_status,buyer_id,bank_id,bank_bill_refferance,lottery_center_bill_refferance,"+
    "bbl_register_date)values('1','1','1433',1,56,$1,'345456','5655r6',now())";
const addlotterydetail = "insert into tbl_bill_buy_lottery_detail ( bbl_id, draw_number, lottery_number, lottery_price)values('1567565','1232',$1,$2)";

module.exports ={
    addlottery,
    addlotterydetail,
};