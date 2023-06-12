//call express function
const { Router } = require('express');

//call controllers
const login_controller = require('../controllers/login_controller');
const register_user_controller = require('../controllers/register_user_controller');
const reset_password_controller = require('../controllers/password_reset_controller');

//set router
const router = Router();

router.post('/register', register_user_controller.register_user);
router.post('/login', login_controller.login);
router.post('/resetpassword', reset_password_controller.reset_password);


module.exports = router;