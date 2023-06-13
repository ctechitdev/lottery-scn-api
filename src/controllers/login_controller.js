const request = require('express/lib/request');
const connected = require('../../setting/connect');

const queries = require('../queries/login_query');


const login = (request, respond) => {


    // respond.status(200).json("API Login");
    const { user_name, pass_word } = request.body;
    connected.query(queries.login_check, [user_name, pass_word], (error, results) => {
        if (error) throw error;
        if (results.rows.length) {
            respond.status(200).send("ມີ User ແລ້ວ");
        } else {
            respond.status(200).send("ລະຫັດຜ່ານບໍ່ຖືກຕ້ອງ");
        }
    });
};


module.exports = {
    login,
}