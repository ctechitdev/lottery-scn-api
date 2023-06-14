const request = require('express/lib/request');
const connected = require('../../setting/connect');

const queries = require('../queries/login_query');


const login = (request, respond) => {


    // respond.status(200).json("API Login");
    const { phone_number, pass_word } = request.body;
    connected.query(queries.login_check, [phone_number, pass_word], (error, results) => {
        if (error) throw error;
        if (results.rows.length) {
            respond.status(200).send("ມີ User ແລ້ວ");
        } else {
            respond.status(200).send("ລະຫັດຜ່ານບໍ່ຖືກຕ້ອງ");
        }
    });
    connected.query(queries.login_select, (error, results) => {
        if (error) throw error;
        if (results.rows.length) {
            respond.status(200).json(results.rows);
        } else {
            respond.status(200).json(results.rows);
        }
    });
};


module.exports = {
    login,
}