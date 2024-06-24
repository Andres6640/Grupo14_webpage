/* carsRoutes.js */

const express = require("express");
const carRouter = express.Router();
const carController = require("../controllers/carController");

carRouter.get("/", carController.getAllCars);
carRouter.get("/:id", carController.getCarById);
carRouter.post("/", carController.createCar);
carRouter.put("/:id", carController.updateCar);
carRouter.delete("/:id", carController.deleteCar);

module.exports = carRouter;
