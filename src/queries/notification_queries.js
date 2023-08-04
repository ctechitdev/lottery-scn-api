const notification_win_lottery = "SELECT * from LOTTO_TICKET_WIN where LOTTO_WIN_ID = $1 ";
const notification_event_promotion = "SELECT * from CUSTOMER_NOTIFICATION where id = $1";

module.exports = {
    notification_win_lottery,
    notification_event_promotion,
    
};