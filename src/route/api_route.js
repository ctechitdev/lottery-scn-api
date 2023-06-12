//call express function
const { Router } = require('express');

//call controllers
const login_controller = require('../controllers/login_controller');
const register_user_controller = require('../controllers/register_user_controller');
const reset_password_controller = require('../controllers/password_reset_controller');
const user_data_controllers = require('../controllers/user_update_data_controllers');
const recommend_number_controllers = require('../controllers/recommend_user_controllers');
const buy_lottery_process_controllers = require('../controllers/buy_lottery_controllers');
const promotions_controllers = require('../controllers/promotions_controllers');
const notification_controllers = require('../controllers/notification_controllers');

//set router
const router = Router();


// route list
router.post('/register', register_user_controller.register_user);
router.post('/login', login_controller.login);
router.post('/resetpassword', reset_password_controller.reset_password);
router.post('/userdata', user_data_controllers.show_user_data);
router.post('/userupdate', user_data_controllers.update_user_data);
router.post('/recommendnumberregister', recommend_number_controllers.register_auto_recommend_number);
router.post('/recommendnumberdata', recommend_number_controllers.show_recommend_number);
router.post('/recommendjoin', recommend_number_controllers.join_recommend_number_sub_user);
router.post('/recommendpoint', recommend_number_controllers.show_recommend_total_point);
router.post('/checklotteryquotapromption', buy_lottery_process_controllers.check_lottery_quota_promotion);
router.post('/paymentlotterybybank', buy_lottery_process_controllers.payment_lottery_bank);
router.post('/historyboughlottery', buy_lottery_process_controllers.history_bought_history);
router.post('/promotioncashback', promotions_controllers.promotions_cash_back);
router.post('/notifywinlottery', notification_controllers.notification_win_lottery);
router.post('/notifyevent', notification_controllers.notification_event_promotion);


module.exports = router;