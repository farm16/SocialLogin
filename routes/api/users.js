const router = require('express').Router();
const userController = require('../../controllers/userControllers');

// Matches with "/api/users"

router
  .route('/findall') //new all
  .get(userController.findAll);
router
  .route('/login') //new user
  .get(userController.findById);

// router
//   .route('/login') //login user
//   .post(userController.login);

// router
//   .route('/auth/google') //login user
//   .get(userController.gAuth);

// router
//   .route('/auth/google/callback') //google redirect link
//   .get(
//     userController.gAuthCallback, //failureRedirect: '/'
//     function(req, res) {
//       console.log('wooo we authenticated, here is our user object:', req.user);
//       res.json(req.user);
//     }
//   );

// // Matches with "/api/user/:id"

// router
//   .route(`/:id`)
//   .get(userController.findById)
//   .put(userController.update)
//   .delete(userController.remove);

module.exports = router;
