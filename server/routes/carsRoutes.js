/* carsRoutes.js */

const express = require("express");
const router = express.Router();
const carController = require("../controllers/carController");

router.get("/", carController.getAllCars);
router.get("/:id", carController.getCarById);
router.get("/user/:id", carController.getCarByUserId);
router.post("/", carController.createCar);
router.put("/:id", carController.updateCar);
router.delete("/:id", carController.deleteCar);

module.exports = router;
