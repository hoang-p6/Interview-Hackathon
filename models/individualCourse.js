"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {

  class IndividualCourse extends Model {
    static associate(models) {}
  }

  IndividualCourse.init(
    {
      studentId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "students",
          key: "id",
        },
      },
      courseId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "courses",
          key: "id",
        },
      },
      grade: {
        type: DataTypes.REAL,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "IndividualCourse",
      tableName: "individualCourse",
    }
  )
  return IndividualCourse
}
