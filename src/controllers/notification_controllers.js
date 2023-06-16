const request = require('express/lib/request');
const connected = require('../../setting/connect');

const queries = require('../queries/notification_queries');


// ສົ່ງແຈ້ງເຕືອນຖືກລາງວັນ
const notification_win_lottery = (request, respond) => {
    const { wll_id } = request.body;
    connected.query(queries.notification_win_lottery, [wll_id], (error, results) => {
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
    const { en_id } = request.body;
    connected.query(queries.notification_event_promotion, [en_id], (error, results) => {
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