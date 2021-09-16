import sequelize from "../index.js";
import s from "sequelize";

const { DataTypes } = s;

const User = sequelize.define("users", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default User;
