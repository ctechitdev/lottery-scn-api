const request = require('express/lib/request');
const connected = require('../../setting/connect');

const queries = require('../queries/user_update_data_queries');


// ສະແດງຂໍ້ມູນຜູ້ໃຊ
const show_user_data = (request, respond) => {


    respond.status(200).json("API single User data");


}

//ແກ້ໄຂຂໍ້ມູນຜູ້ໃຊ້
const update_user_data = (request, respond) => {


    respond.status(200).json("API update User single data");


}


module.exports = {
    show_user_data,
    update_user_data,
}