const request = require('express/lib/request');
const connected = require('../../setting/connect');

const queries = require('../queries/user_update_data_queries');


// ສະແດງຂໍ້ມູນຜູ້ໃຊ
const show_user_data = (request, respond) => {

    const { id } = request.body;

    console.log(id);
    

connected.query(queries.show_user_data,[id],(error, results)=> {
    if(error) throw error;
    if(results.rows.length){
        respond.status(200).json(results.rows);
    }else{
        respond.status(200).send("no users");
    }
})    



    ///respond.status(200).json("API single User data");


}

//ແກ້ໄຂຂໍ້ມູນຜູ້ໃຊ້ 
const update_user_data = (request, respond) => {

    const { id,gender,full_name, pass_word , user_status} = request.body;

    connected.query(queries.update_user_data,[id,gender,full_name, pass_word , user_status],(error,results)=> {
        if(error) throw error;
        if(results.rowCount == 1) {
            respond.status(200).json("update done");
        }else{
            respond.status(200).json("update error");
        }
    })


    //respond.status(200).json("API update User single data");


}


module.exports = {
    show_user_data,
    update_user_data,
}