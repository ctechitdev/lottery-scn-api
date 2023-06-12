const request = require('express/lib/request');
const connected = require('../../setting/connect');

const queries = require('../queries/recommend_user_queries');

//ອໍໂຕລົງທະບຽນເລກແນະນຳ
const register_auto_recommend_number = (request, respond) => {


    respond.status(200).json("API register recommend auto number");


}

//ສະແດງເລກແນະນຳ
const show_recommend_number = (request, respond) => {


    respond.status(200).json("API show single recommend number ");


}

//ຜູກເລກແນະນຳ
const join_recommend_number_sub_user = (request, respond) => {


    respond.status(200).json("API join recommend number with sub user ");


}



//ສະແດງຍອດແນະນຳ
const show_recommend_total_point = (request, respond) => {


    respond.status(200).json("API show total recommend point ");


}


module.exports = {
    register_auto_recommend_number,
    show_recommend_number,
    join_recommend_number_sub_user,
    show_recommend_total_point,
}