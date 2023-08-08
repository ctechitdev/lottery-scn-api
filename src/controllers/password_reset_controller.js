const request = require("express/lib/request");
const connected = require("../../setting/connect");

const queries = require("../queries/password_reset_query");

const bcrypt = require("bcrypt");

const reset_password = async(request, respond) => {
    // respond.status(200).json("API reset password");

    const random_number = Math.floor(Math.random() * 10000) ;

    const newPassword = random_number.toString();

    const { phone_number } = request.body;


    connected.query(queries.checkphone, [phone_number], (error, results) => {
        const checkpass = !results.rows.length;
        if (checkpass) {
            respond.send("ບໍ່ມີໃນລະບົບ");
        } else {
            connected.query(
                queries.setpassword, [phone_number, newPassword],
                (error, results) => {
                    if (error) throw error;
                    respond.status(200).send("ປ່ຽນລະຫັດສຳເລັດ");
                }
            );
        }
    });
};

module.exports = {
    reset_password,
};