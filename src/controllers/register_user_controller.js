const request = require("express/lib/request");
const connected = require("../../setting/connect");

const queries = require("../queries/register_user_query");

const register_user = (request, respond) => {
  // respond.status(200).json("API Register User");

  const { full_name, gender, phone_number, pass_word ,checkpassword } = request.body;

//check number

  connected.query(queries.checkphone, [phone_number,checkpassword], (error, results) => {
    
   if (results.rows.length) {
      respond.send("ເບີນີ້ໄດ້ລົງທະບຽນແລ້ວ!");
    }else if(checkpassword !== pass_word){
      respond.send("ລະຫັດບໍ່ຕົງ")
    } else {
      //add user
      connected.query(
        queries.adduser,
        [full_name, gender, phone_number, pass_word],
        (error, results) => {
          if (error) throw error;
          respond.send("ລົງທະບຽນສຳເລັດ!");
        }
      );
    } 
  });
};

module.exports = {
  register_user,
};
