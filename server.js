const express = require('express');
const passport = require('passport');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

const PORT = 5033;
const app = express();
const db = require('./models');
const routes = require('./routes');

var corsOption = {
  origin: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  exposedHeaders: ['x-auth-token']
};
app.use(cors(corsOption));
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Add routes, both API and view
// ex.  /api/v1/users/findall
app.use(routes);
app.use(express.static(path.join(__dirname, 'client/build')));
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});
//database connection
db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log(`Server running on port: ${PORT}`);
  });
});
