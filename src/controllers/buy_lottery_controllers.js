const request = require("express/lib/request");
const connected = require("../../setting/connect");

const queries = require("../queries/buy_lottery_queries");

// call json web token
const jwt = require('jsonwebtoken');

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
    respond.status(200).json("API insert data payment");
};

// ປະຫວັດການຊື້ເລກ
const history_bought_history = (request, respond) => {
    const { bank_id } = request.body;
    connected.query(queries.addlottery, [bank_id], (error, results) => {

        if (results.rows.length) {
            respond.status(201).send("create successfully!");
        } else {
            const { lottery_number, lottery_price } = request.body;
            connected.query(
                queries.addlotterydetail, [lottery_number, lottery_price],
                (error, results) => {
                    if (error) throw error;
                    respond.status(201).send("create successfully!");
                }
            );
        }
    });
};

module.exports = {
    check_lottery_quota_promotion,
    payment_lottery_bank,
    history_bought_history,
};