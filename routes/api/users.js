const router = require('express').Router();
const userController = require('../../controllers/userControllers');

// Matches with "/api/users"

router
  .route('/findall') //for testing
  .get(userController.findAll);
router
  .route('/register') //new user
  .post(userController.register);
router
  .route('/login') //login user
  .post(userController.login);
router
  .route('/auth/facebook') //login user
  .post(userController.registerFB);
router
  .route('/auth/google') //login user
  .post(userController.registerGoogle);

module.exports = router;
