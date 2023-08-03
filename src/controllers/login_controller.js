const request = require('express/lib/request');
const connected = require('../../setting/connect');

const queries = require('../queries/login_query');

// call bcrype package
const bcrypt = require('bcrypt');

 

const login = (request, respond) => {

    const { registration_token } = request.body;

    connected.query(queries.login_check, [otp], (error, results) => {
        if (error) throw error;
        if (results.rows.length) {
            const users = results.rows[0];


            bcrypt.compare(registration_token, users.otp, (error, isMatch) => {

                if (isMatch) {
                  
                    respond.status(200).send("login success");


                } else {
                    respond.status(200).send("ລະຫັດຜ່ານບໍ່ຖືກຕ້ອງ");
                }
            })

        } else {
            respond.status(200).send("ບໍ່ພົບຂໍ້ມູນຜູ້ໃຊ້");
        }
    });

};


module.exports = {
    login,
}