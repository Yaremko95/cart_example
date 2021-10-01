import sequelize from "../index.js";
import s from "sequelize";

const { DataTypes } = s;

const Review = sequelize.define("reviews", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  text: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rate: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Review;
