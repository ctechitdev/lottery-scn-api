const request = require('express/lib/request');
const connected = require('../../setting/connect');

const queries = require('../queries/promotions_queries');


// ຄິດໄລ່ຫັກຍອດເງິນຄືນ
const promotions_cash_back = (request, respond) => {
    
    connected.query(queries.promotions_cash_back, (error, results) => {
        if (error) throw error;
        if (results.rows.length) {
            respond.status(200).json(results.rows);
        } else {
            respond.status(200).json("API Show total Cash back price");
        }
    });
};

 

module.exports = {
    promotions_cash_back,
}