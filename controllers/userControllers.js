const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../models');
const passport = require('passport');

module.exports = {
  findById: function(req, res) {
    db.Users.find({
      where: {
        id: userId
      }
    })
      .then(function(dbModel) {
        console.log(dbModel);
        return res.json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  },
  findAll: function(req, res) {
    db.Users.findAll()
      .then(function(dbModel) {
        console.log(dbModel);
        return res.json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  }
};

// module.exports = {
//   findById: function(req, res) {
//     db.User.findById({ _id: req.params.id })
//       .then(dbModel => {
//         console.log(dbModel);
//         return res.json(dbModel);
//       })
//       .catch(err => res.status(422).json(err));
//   },
//   create: function(req, res) {
//     db.User.create(req.body)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
//   update: function(req, res) {
//     db.User.findOneAndUpdate({ _id: req.params.id }, req.body)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
//   remove: function(req, res) {
//     db.User.findById({ _id: req.params.id })
//       .then(dbModel => dbModel.remove())
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
//   register: function(req, res) {
//     const { errors, isValid } = validateRegisterInput(req.body);
//     if (!isValid) {
//       return res.status(400).json(errors);
//     }
//     db.User.findOne({ email: req.body.email })
//       .then(user => {
//         if (user) {
//           return res.status(400).json({ email: 'Email already exists' });
//         } else {
//           db.User.create(req.body)
//             .then(dbModel => res.json(dbModel))
//             .catch(err => {
//               console.log(err);
//               res.status(422).json(err);
//             });
//         }
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   },
//   gAuth: passport.authenticate('google', {
//     scope: ['profile', 'email']
//   }),
//   gAuthCallback: passport.authenticate('google', {
//     successRedirect: '/',
//     failureRedirect: '/'
//   }),

//   /*
//     db.User.findOne({ req }).then(user => {
//       // Check if user exists
//       if (!user) {
//         return res.status(404).json({ emailnotfound: 'Email not found' });
//       }

//       // Check password
//       bcrypt.compare(password, user.password).then(isMatch => {
//         if (isMatch) {
//           // User matched
//           // Create JWT Payload
//           const payload = {
//             id: user.id,
//             name: user.name,
//             isPremium: user.isPremium,
//             email: user.email,
//             startDate: user.date
//           };

//           // Sign token
//           jwt.sign(
//             payload,
//             keys.secretOrKey,
//             {
//               expiresIn: 31556926 // 1 year in seconds
//             },
//             (err, token) => {
//               res.json({
//                 success: true,
//                 token: 'Bearer ' + token
//               });
//             }
//           );
//         } else {
//           return res
//             .status(400)
//             .json({ passwordincorrect: 'Password incorrect' });
//         }
//       });
//     });

//     */

//   login: function(req, res) {
//     const { errors, isValid } = validateLoginInput(req.body);
//     // Check validation
//     if (!isValid) {
//       return res.status(400).json(errors);
//     }

//     const email = req.body.email;
//     const password = req.body.password;

//     // Find user by email
//     db.User.findOne({ email }).then(user => {
//       // Check if user exists
//       if (!user) {
//         return res.status(404).json({ emailnotfound: 'Email not found' });
//       }

//       // Check password
//       bcrypt.compare(password, user.password).then(isMatch => {
//         if (isMatch) {
//           // User matched
//           // Create JWT Payload
//           const payload = {
//             id: user.id,
//             name: user.name,
//             isPremium: user.isPremium,
//             email: user.email,
//             startDate: user.date
//           };

//           // Sign token
//           jwt.sign(
//             payload,
//             keys.secretOrKey,
//             {
//               expiresIn: 31556926 // 1 year in seconds
//             },
//             (err, token) => {
//               res.json({
//                 success: true,
//                 token: 'Bearer ' + token
//               });
//             }
//           );
//         } else {
//           return res
//             .status(400)
//             .json({ passwordincorrect: 'Password incorrect' });
//         }
//       });
//     });
//   }
// };
