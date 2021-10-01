import sequelize from "../index.js";
import s from "sequelize";

const { DataTypes } = s;

const Product = sequelize.define("product", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

export default Product;
