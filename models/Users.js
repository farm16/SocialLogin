const bcrypt = require('bcrypt');

module.exports = function(sequelize, DataTypes) {
  const Users = sequelize.define(
    'Users',
    {
      // name: {
      //   type: DataTypes.STRING
      // },
      email: {
        type: DataTypes.STRING
      },
      name: {
        type: DataTypes.STRING
      },
      password: {
        type: DataTypes.STRING
      },
      address: {
        type: DataTypes.STRING
      },
      facebookToken: {
        type: DataTypes.STRING
      },
      gmailToken: {
        type: DataTypes.STRING
      },
      phone: {
        type: DataTypes.STRING
      },
      isTxtActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    },
    {
      hooks: {
        beforeCreate: async function(user) {
          const salt = await bcrypt.genSalt(10); //whatever number you want
          user.password = await bcrypt.hash(user.password, salt);
        }
      }
    }
  );
  Users.prototype.validPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
  };
  return Users;
};

// ============================================
// NOTES:
// All number types (INTEGER, BIGINT, FLOAT, DOUBLE, REAL, DECIMAL)
// expose the properties UNSIGNED and ZEROFILL
// The CHAR and STRING types expose the BINARY property
// ============================================
