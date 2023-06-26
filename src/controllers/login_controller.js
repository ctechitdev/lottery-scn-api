const request = require('express/lib/request');
const connected = require('../../setting/connect');

const queries = require('../queries/login_query');

// call bcrype package
const bcrypt = require('bcrypt');

// call json web token
const jwt = require('jsonwebtoken');

// key use for decript and encrype JWT
const secretkey = "CtectLottery";

const login = (request, respond) => {

    const { phone_number, pass_word } = request.body;

    connected.query(queries.login_check, [phone_number], (error, results) => {
        if (error) throw error;
        if (results.rows.length) {
            const users = results.rows[0];


            bcrypt.compare(pass_word, users.pass_word, (error, isMatch) => {

                if (isMatch) {
                    const accessToken = jwt.sign({ id: users.user_external_id, phone: users.phone_number }, secretkey, { expiresIn: "2h" });

                    respond.status(200).json([{ accessToken }])


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