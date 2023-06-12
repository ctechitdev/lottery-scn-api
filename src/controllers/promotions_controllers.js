const request = require('express/lib/request');
const connected = require('../../setting/connect');

const queries = require('../queries/promotions_queries');


// ຄິດໄລ່ຫັກຍອດເງິນຄືນ
const promotions_cash_back = (request, respond) => {



    respond.status(200).json("API Show total Cash back price");


}



module.exports = {
    promotions_cash_back,
}