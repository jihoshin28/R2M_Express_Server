'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Review.init({
    subject: {
      type: DataTypes.STRING,
      allowNull: false
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isName(value){
          let checkChars = (val) => {
            for(let i = 0; i < val.length; i++){
              if(!(/[a-zA-Z]/).test(val[i])){
                console.log(val[i], typeof val[i])
                throw new Error('Please enter correctly spelled name.')
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
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: true
      }
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isCity(value){
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
    state: {
      type: DataTypes.STRING, 
      allowNull: false,
      validate: {
        isAlpha: true,
        len: [2, 2]
      }
    }
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};