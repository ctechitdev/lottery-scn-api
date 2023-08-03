const request = require("express/lib/request");
const connected = require("../../setting/connect");

const queries = require("../queries/register_user_query");
 
const bcrypt = require('bcrypt'); 

const register_user = async (request, respond) => {
  // respond.status(200).json("API Register User");

  const {firstname,lastname, gender, phone,email,dob,image,registration_token } = request.body;

  const encryptpassword = await bcrypt.hash(registration_token, 10);

  connected.query(queries.checkuser, [phone], (error, results) => {
    if (results.rows.length) {
      respond.send("ຢູສເຊີນີ້ລົງທະບຽນແລ້ວ");
    } else {
      connected.query(
        queries.adduser,
        [firstname,lastname, gender, phone,email,dob,image,encryptpassword],
        (error, results) => {
          if (error) throw error;
          respond.send("ລົງທະບຽນສຳເລັດ");
        }
      );
    }
  });
};

module.exports = {
  register_user,
};
