import express from "express";
import db from "../../db/models/index.js";
import sequelize from "sequelize";

const { Author } = db;
const router = express.Router();

router
  .route("/")
  .get(async (req, res, next) => {
    try {
      const data = await Author.findAll({});
      res.send(data);
    } catch (error) {
      console.log(error);
      next(error);
    }
  })
  .post(async (req, res, next) => {
    try {
      const data = await Author.bulkCreate([
        {
          email: "Tetiana",
          country: "Ukraine",
        },
        {
          email: "Ubeyt",
          country: "Turkey",
        },
        {
          email: "Diego",
          country: "Italy",
        },
        {
          email: "Stefano",
          country: "Italy",
        },
        {
          email: "Riccardo",
          country: "Italy",
        },
      ]);
      res.send(data);
    } catch (error) {
      console.log(error);
      next(error);
    }
  });

router
  .route("/:id")
  .get(async (req, res, next) => {
    try {
      res.send("ok");
    } catch (error) {
      console.log(error);
      next(error);
    }
  })
  .put(async (req, res, next) => {
    try {
      res.send("ok");
    } catch (error) {
      console.log(error);
      next(error);
    }
  })
  .delete(async (req, res, next) => {
    try {
      res.send("ok");
    } catch (error) {
      console.log(error);
      next(error);
    }
  });

export default router;
