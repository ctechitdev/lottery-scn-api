const request = require("express/lib/request");
const connected = require("../../setting/connect");

const queries = require("../queries/buy_lottery_queries");

// call json web token
const jwt = require("jsonwebtoken");

// key use for decript and encrype JWT
const secretkey = "CtectLottery";

// ກວດສອບໂຄຕ້າ ແລະ ໂປຣໂມຊັ້ນ ຂອງເລກສ່ຽງ
const check_lottery_quota_promotion = (request, respond) => {
    // 1.ກວດສອບໂຄຕ້າເລກສ່ຽງ
    // 2.ຄິດໄລ່ຫັກຍອດຄືນເງິນ
    // 3.ສະແດງຍອດທີ່ຕ້ອງຈ່າຍ

    respond
        .status(200)
        .json("API Check lottery number litmit price and promotion cash back");
};

// ຊຳລະເງິນ
const payment_lottery_bank = (request, respond) => {

    const { lottery, price } = request.body;

    // ຮັບ array
    const lottery_number = lottery;
    const price_values = price;

    i = 0

    //ວົນລູບຕາມຈຳນວນ
    while (i < lottery_number.length) {
        //  console.log(array[i])
        connected.query(queries.insert_data, [lottery_number[i], price_values[i]])
        i++
    }

    respond.status(200).json("ຈ່າຍເງິນສຳເລັດ");


};

// ປະຫວັດການຊື້ເລກ
const history_bought_history = (request, respond) => {
    jwt.verify(request.token, secretkey, (err, rstoken) => {
        if (err) {
            respond.status(201).json("token Expire");
        } else {
            //respond.status(200).json(ridderid);
            const id = rstoken.id;
            connected.query(queries.showhistory, [id], (error, results) => {
                if (results.rows.length) {
                    respond.status(200).json(results.rows);
                } else {
                    respond.status(200).json("ບໍມີໃນລະບົບ");
                }
            });
        }
    });
};

module.exports = {
    check_lottery_quota_promotion,
    payment_lottery_bank,
    history_bought_history,
};