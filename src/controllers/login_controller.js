const request = require('express/lib/request');
const connected = require('../../setting/connect');

const queries = require('../queries/login_query');
 
const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

const login = (request, respond) => {

    const { phone_number,otp } = request.body;

    connected.query(queries.login_check, [phone_number], (error, results) => {
        if (error) throw error;
        if (results.rows.length) {
            const users = results.rows[0];


             //respond.status(200).json(users.otp)
 
                if (otp === users.otp ) {
                    const accessToken = jwt.sign({ id: users.otp }, secretkey  );

                    respond.status(200).json([{ accessToken }])

                } else {
                    respond.status(200).send("ລະຫັດຜ່ານບໍ່ຖືກຕ້ອງ");
                }
         

        } else {
            respond.status(200).send("ບໍ່ພົບຂໍ້ມູນຜູ້ໃຊ້");
        }
    });

};


module.exports = {
    login,
}