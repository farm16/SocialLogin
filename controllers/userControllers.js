const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../models');
const validateRegisterInput = require('../validator/register');
const validateLoginInput = require('../validator/login');
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
  },
  register: function(req, res) {
    const { errors, isValid } = validateRegisterInput(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }
    db.Users.findOne({
      where: { email: req.body.email }
    })
      .then(user => {
        if (user) {
          return res.status(400).json({ email: 'Email already exists' });
        } else {
          db.Users.create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => {
              console.log(err);
              res.status(422).json(err);
            });
        }
      })
      .catch(err => {
        console.log(err);
      });
  },
  login: function(req, res) {
    const { errors, isValid } = validateLoginInput(req.body);
    // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    // Find user by email
    db.Users.findOne({ where: { email: email } })
      .then(async function(user) {
        // Check if user exists
        if (!user) {
          return res.status(404).json({ emailnotfound: 'Email not found' });
        }
        console.log(password, user.password);
        // Check password

        if (await user.validPassword(password)) {
          // User matched
          // Create JWT Payload
          const payload = {
            id: user.id,
            name: user.name,
            email: user.email,
            address: user.address,
            phone: user.phone,
            isTxtActive: user.isTxtActive,
            since: user.createdAt
          };
          console.log(payload);

          // Sign token
          jwt.sign(
            payload,
            process.env.SECRETKEY,
            {
              expiresIn: 31556926 // 1 year in seconds
            },
            (err, token) => {
              res.json({
                success: true,
                token: 'Bearer ' + token
              });
            }
          );
        } else {
          return res
            .status(400)
            .json({ passwordincorrect: 'Password incorrect' });
        }
      })
      .catch(err => {
        console.log(err);
      });
  },
  registerFB: function(req, res) {
    console.log(req);
    // Find user by email
    db.Users.findOne({ where: { facebookToken: req.body.clientToken } })
      .then(function(user) {
        if (user) {
          // User matched
          // Create JWT Payload
          const payload = {
            id: user.id,
            name: user.name,
            email: user.email,
            address: user.address,
            phone: user.phone,
            isTxtActive: user.isTxtActive,
            since: user.createdAt
          };
          // Sign token
          jwt.sign(
            payload,
            process.env.SECRETKEY,
            {
              expiresIn: 31556926 // 1 year in seconds
            },
            (err, token) => {
              res.json({
                success: true,
                token: 'Bearer ' + token
              });
            }
          );
        } else {
          db.Users.create({
            facebookToken: req.body.clientToken,
            name: req.body.name,
            email: req.body.email,
            imageUrl: req.body.picture,
            password: req.body.clientToken
          })
            .then(function(user) {
              const payload = {
                id: user.id,
                name: user.name,
                email: user.email,
                address: user.address,
                phone: user.phone,
                isTxtActive: user.isTxtActive,
                since: user.createdAt
              };
              // Sign token
              jwt.sign(
                payload,
                process.env.SECRETKEY,
                {
                  expiresIn: 31556926 // 1 year in seconds
                },
                (err, token) => {
                  res.json({
                    success: true,
                    token: 'Bearer ' + token
                  });
                }
              );
            })
            .catch(err => {
              console.log(err);
            });
        }
      })
      .catch(err => {
        console.log(err);
      });
  },
  registerGoogle: function(req, res) {
    console.log(req);
    // Find user by email
    db.Users.findOne({ where: { gmailToken: req.body.clientToken } })
      .then(function(user) {
        if (user) {
          // User matched
          // Create JWT Payload
          const payload = {
            id: user.id,
            name: user.name,
            email: user.email,
            address: user.address,
            phone: user.phone,
            isTxtActive: user.isTxtActive,
            since: user.createdAt
          };
          // Sign token
          jwt.sign(
            payload,
            process.env.SECRETKEY,
            {
              expiresIn: 31556926 // 1 year in seconds
            },
            (err, token) => {
              res.json({
                success: true,
                token: 'Bearer ' + token
              });
            }
          );
        } else {
          db.Users.create({
            gmailToken: req.body.clientToken,
            name: req.body.name,
            email: req.body.email,
            imageUrl: req.body.picture,
            password: req.body.clientToken
          })
            .then(function(user) {
              const payload = {
                id: user.id,
                name: user.name,
                email: user.email,
                address: user.address,
                phone: user.phone,
                isTxtActive: user.isTxtActive,
                since: user.createdAt
              };
              // Sign token
              jwt.sign(
                payload,
                process.env.SECRETKEY,
                {
                  expiresIn: 31556926 // 1 year in seconds
                },
                (err, token) => {
                  res.json({
                    success: true,
                    token: 'Bearer ' + token
                  });
                }
              );
            })
            .catch(err => {
              console.log(err);
            });
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
};
