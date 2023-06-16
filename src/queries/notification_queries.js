const notification_win_lottery = "SELECT * from tbl_win_lottery_list where wll_id = $1 ";
const notification_event_promotion = "SELECT * from tbl_event_notified where en_id = $1";

module.exports = {
    notification_win_lottery,
    notification_event_promotion,
    
};