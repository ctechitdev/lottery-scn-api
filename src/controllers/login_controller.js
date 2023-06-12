const request = require('express/lib/request');
const connected = require('../../setting/connect');

const queries = require('../queries/login_query');


const login = (request, respond) => {


    // respond.status(200).json("API Login");

    connected.query(queries.login_check, (error, results) => {
        if (error) throw error;
        if (results.rows.length) {
            respond.status(200).json(results.rows);
        } else {
            respond.status(200).json("no data");
        }
    })
}


module.exports = {
    login,
}