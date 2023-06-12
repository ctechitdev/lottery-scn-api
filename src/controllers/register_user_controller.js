const request = require('express/lib/request');
const connected = require('../../setting/connect');

const queries = require('../queries/register_user_query');


const register_user = (request, respond) => {


    respond.status(200).json("API Register User");


}


module.exports = {
    register_user,
}