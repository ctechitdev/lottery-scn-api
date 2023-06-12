const request = require('express/lib/request');
const connected = require('../../setting/connect');

const queries = require('../queries/notification_queries');


// ສົ່ງແຈ້ງເຕືອນຖືກລາງວັນ
const notification_win_lottery = (request, respond) => {



    respond.status(200).json("API send notification win lottery to user");


}

// ສົ່ງແຈ້ງເຕືອນກິດຈະກຳ
const notification_event_promotion = (request, respond) => {



    respond.status(200).json("API send notification event or promotions to user");


}



module.exports = {
    notification_win_lottery,
    notification_event_promotion,
}