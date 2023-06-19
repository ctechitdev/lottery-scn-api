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
router.post('/login',   login_controller.login);
router.post('/resetpassword',  reset_password_controller.reset_password);
router.post('/userdata',verifyToken, user_data_controllers.show_user_data);
router.post('/userupdate',verifyToken, user_data_controllers.update_user_data);
router.post('/recommendnumberregister',verifyToken, recommend_number_controllers.register_auto_recommend_number);
router.post('/recommendnumberdata', verifyToken, recommend_number_controllers.show_recommend_number);
router.post('/recommendjoin',verifyToken, recommend_number_controllers.join_recommend_number_sub_user);
router.post('/recommendpoint',verifyToken, recommend_number_controllers.show_recommend_total_point);
router.post('/checklotteryquotapromption',verifyToken, buy_lottery_process_controllers.check_lottery_quota_promotion);
router.post('/paymentlotterybybank',verifyToken, buy_lottery_process_controllers.payment_lottery_bank);
router.post('/historyboughlottery',verifyToken, buy_lottery_process_controllers.history_bought_history);
router.post('/promotioncashback',verifyToken, promotions_controllers.promotions_cash_back);
router.post('/notifywinlottery',verifyToken, notification_controllers.notification_win_lottery);
router.post('/notifyevent',verifyToken, notification_controllers.notification_event_promotion);


function verifyToken(req, res, next) {
    // Get auth header value
    const bearerHeader = req.headers['authorization'];
    // Check if bearer is undefined
    if(typeof bearerHeader !== 'undefined') {
      // Split at the space
      const bearer = bearerHeader.split(' ');
      // Get token from array
      const bearerToken = bearer[1];
      // Set the token
      req.token = bearerToken;
      // Next middleware
      next();
    } else {
      // Forbidden
      res.sendStatus(403);
    }
  
  }


module.exports = router;