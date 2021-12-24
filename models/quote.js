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
      }
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
        isSelectSize(value){
          if(value === "Select size"){
            throw new Error('Please select a move size.')
          }
        }
      }
    },
    vehicle_size: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        isSelectSize(value){
          if(value === "Select size"){
            throw new Error('Please select a move size.')
          }
        }
      }
    },
    floor: {
      type: DataTypes.STRING,
    },
    distance: {
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
    added_items: {
      type: DataTypes.TEXT
    },
    start_street: {
      type: DataTypes.STRING
    },
    start_city: {
      type: DataTypes.STRING,
      validate: {
        isCity(value){
          let checkChars = (val) => {
            for(let i = 0; i < val.length; i++){
              if(!(/[a-zA-Z]/).test(val[i])){
                console.log(val[i], typeof val[i])
                throw new Error('Please enter valid city.')
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
    start_state: {
      type: DataTypes.STRING,
      validate: {
        isAlpha: true,
        len: [2, 2]
      }
    },
    start_zip: {
      type: DataTypes.STRING,
      validate: {
        isInt: true,
        len: [5, 5]
      }
    },
    // delivery_time: {
    //   type: DataTypes.STRING,
    //   allowNull: false
    // },
    // delivery_date: {
    //   type: DataTypes.DATE,
    //   allowNull: false
    // },
    delivery_street: {
      type: DataTypes.STRING,
    },
    delivery_city: {
      type: DataTypes.STRING,
      validate: {
        isCity(value){
          let checkChars = (val) => {
            for(let i = 0; i < val.length; i++){
              if(!(/[a-zA-Z]/).test(val[i])){
                console.log(val[i], typeof val[i])
                throw new Error('Please enter valid city.')
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
    delivery_state: {
      type: DataTypes.STRING,
      validate: {
        isAlpha: true,
        len: [2, 2]
      }
    },
    delivery_zip: {
      type: DataTypes.STRING,
      validate: {
        isInt: true,
        len: [5, 5]
      }
    },
  }, {
    sequelize,
    modelName: 'Quote',
  });
  return Quote;
};