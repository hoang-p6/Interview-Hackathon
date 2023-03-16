"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {

  class Student extends Model {
    static associate(models) {
      Student.belongsToMany(models.Course, {
        through: models.IndividualCourse,
        as: "courses",
        foreignKey: "studentId",
      })
    }
  }

  Student.init(
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
    },
    {
      sequelize,
      modelName: "Student",
      tableName: "students",
    }
  )
  return Student
}
