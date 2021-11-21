'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Quote extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Quote.belongsToMany(models.Item, {
        through: 'QuoteItem',
        as: 'items',
        foreignKey: 'quote_id'
      });
    }
  };
  Quote.init({
    name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    phone: {
      type: DataTypes.STRING
    },
    move_size: {
      type: DataTypes.STRING
    },
    weight_total: {
      type: DataTypes.FLOAT
    },
    price_total: {
      type: DataTypes.FLOAT
    },
    comments: {
      type: DataTypes.TEXT
    },
  }, {
    sequelize,
    modelName: 'Quote',
  });
  return Quote;
};