module.exports = function(sequelize, DataTypes) {
  var Items = sequelize.define("Items", {
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 30]
      }
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 30]
      }
    },
    street: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 30]
      }
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 30]
      }
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 2]
      }
    },
    zip: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [5]
      }
    },
    rank: {
      type: DataTypes.STRING,
      defaultValue: "White"
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 100]
      }
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [10]
      }
    }
  });

  Items.associate = function(models) {
    Items.belongsTo(models.Accounts, {
      foreignKey: "owner_id"
    });
  };

  Items.associate = function(models) {
    Items.hasMany(models.Transactions, {
      foreignKey: "item_id"
    });
  };

  return Items;
};
