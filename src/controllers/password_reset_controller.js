const request = require('express/lib/request');
const connected = require('../../setting/connect');

const queries = require('../queries/password_reset_query');


const reset_password = (request, respond) => {


    respond.status(200).json("API reset password");


}


module.exports = {
    reset_password,
}