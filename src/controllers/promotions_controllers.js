const request = require('express/lib/request');
const connected = require('../../setting/connect');

const queries = require('../queries/promotions_queries');

 

// call json web token
const jwt = require('jsonwebtoken');
 
// key use for decript and encrype JWT
const secretkey = "CtectLottery";

// ຄິດໄລ່ຫັກຍອດເງິນຄືນ
const promotions_cash_back = (request, respond) => {
    const { cbpo_id } = request.body;
    connected.query(queries.promotions_cash_back, [cbpo_id], (error, results) => {
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