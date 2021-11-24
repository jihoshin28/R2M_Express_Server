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
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isName(value){
          let checkChars = (val) => {
            for(let i = 0; i < val.length; i++){
              if(!(/[a-zA-Z]/).test(val[i])){
                console.log(val[i], typeof val[i])
                throw new Error('Please enter your full name.')
              }
            }
          } 
          
          let nameArray = value.split(' ')

          nameArray.forEach(char => {
            checkChars(char)
          })
        }
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [10, 10],
      }
    },
    move_size: {
      type: DataTypes.STRING, 
      validate:{
        isallowNull(value){
          if(value === "Select move size"){
            throw new Error('Please select a move size.')
          }
        }
      }
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