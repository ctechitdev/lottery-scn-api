const request = require('express/lib/request');
const connected = require('../../setting/connect');

const queries = require('../queries/user_update_data_queries');


// call bcrypt for decrypt function
const bcrypt = require('bcrypt');

// call json web token
const jwt = require('jsonwebtoken');
 
// key use for decript and encrype JWT
const secretkey = "CtectLottery";


// ສະແດງຂໍ້ມູນຜູ້ໃຊ
const show_user_data = (request, respond) => {

<<<<<<< HEAD
    jwt.verify(req.token, secretkey, (err, rstoken) => {

        const id = rstoken.id;

       if (err) {
            res.sendStatus(403);
        } else {
    connected.query(queries.show_user_data, [id], (error, results) => {
        if (error) throw error;
        if (results.rows.length) {
            respond.status(200).json(results.rows);
        } else {
            respond.status(200).send("no users");
        }
    })
        }
});
=======
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
>>>>>>> f08329d9d3b56e3b435e231dfcd06df76f958c80



    ///respond.status(200).json("API single User data");


}

//ແກ້ໄຂຂໍ້ມູນຜູ້ໃຊ້ 
const update_user_data = (request, respond) => {

<<<<<<< HEAD
    jwt.verify(req.token, secretkey, (err, rstoken) => {

    const id = rstoken.id;
    const { gender, full_name, pass_word } = request.body;

    connected.query(queries.update_user_data, [id, gender, full_name, pass_word], (error, results) => {
            if (error) throw error;
            if (results.rowCount == 1) {
                respond.status(200).json("update done");
            } else {
                respond.status(200).json("update error");
            }
        })
    });
        //respond.status(200).json("API update User single data");
=======
    const { id,gender,full_name, pass_word , user_status} = request.body;

    connected.query(queries.update_user_data,[id,gender,full_name, pass_word],(error,results)=> {
        if(error) throw error;
        if(results.rowCount == 1) {
            respond.status(200).json("update done");
        }else{
            respond.status(200).json("update error");
        }
    })
    //respond.status(200).json("API update User single data");
>>>>>>> f08329d9d3b56e3b435e231dfcd06df76f958c80
}


const join_recommend_number_sub_user = (request, respond) => {

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