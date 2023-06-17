const promotions_cash_back = "select * from tbl_cash_back_promotion where cbpo_id = $1";



module.exports = {
    promotions_cash_back,
  };
  