const request = require('express/lib/request');
const connected = require('../../setting/connect');

const queries = require('../queries/notification_queries');



// call json web token
const jwt = require('jsonwebtoken');
 
// key use for decript and encrype JWT
const secretkey = "CtectLottery";

// ສົ່ງແຈ້ງເຕືອນຖືກລາງວັນ
const notification_win_lottery = (request, respond) => {
    const { LOTTO_WIN_ID } = request.body;
    connected.query(queries.notification_win_lottery, [LOTTO_WIN_ID], (error, results) => {
        if (error) throw error;
        if (results.rows.length) {
            respond.status(200).json(results.rows);
        } else {
            respond.status(200).json("API send notification win lottery to user");
        }
    });
};

// ສົ່ງແຈ້ງເຕືອນກິດຈະກຳ
const notification_event_promotion = (request, respond) => {
    const { id } = request.body;
    connected.query(queries.notification_event_promotion, [id], (error, results) => {
        if (error) throw error;
        if (results.rows.length) {
            respond.status(200).json(results.rows);
        } else {
            respond.status(200).json("API send notification event or promotions to user");
        }
    });
};



module.exports = {
    notification_win_lottery,
    notification_event_promotion,
};