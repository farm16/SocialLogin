module.exports = function(sequelize, DataTypes) {
  const Users = sequelize.define('Users', {
    // name: {
    //   type: DataTypes.STRING
    // },
    email: {
      type: DataTypes.STRING
    },
    address: {
      type: DataTypes.STRING
    },
    phone: {
      type: DataTypes.STRING
    },
    isTxtActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });
  return Users;
};

// ============================================
// NOTES:
// All number types (INTEGER, BIGINT, FLOAT, DOUBLE, REAL, DECIMAL)
// expose the properties UNSIGNED and ZEROFILL
// The CHAR and STRING types expose the BINARY property
// ============================================
