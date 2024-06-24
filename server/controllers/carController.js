/* carController.js */

const db = require("../db/db");

const getAllCars = (req, res) => {
    const sql = "SELECT * FROM coches";
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
};

const getCarById = (req, res) => {
    const {id} = req.params;
    const sql = "SELECT * FROM coches WHERE id = ?";
    db.query(sql, [id], (err, result) => {
        if (err) throw err;
        res.json(result);
    });
};

const createCar = (req, res) => {
    const {modelo, anio, matricula, pais_cc, ciudad, imagen} = req.body;
    const sql = "INSERT INTO coches (modelo, anio, matricula, pais_cc, ciudad, imagen) VALUES (?, ?, ?, ?, ?, ?)";
    db.query(sql, [modelo, anio, matricula, pais_cc, ciudad, imagen], (err, result) => {
        if (err) throw err;
        res.json({message: "Coche creado", carId: result.insertId});
    });
};

const updateCar = (req, res) => {
    const {id} = req.params;
    const {modelo, anio, matricula, pais_cc, ciudad, imagen} = req.body;
    const sql = "UPDATE coches SET modelo = ?, anio = ?, matricula = ?, pais_cc = ?, ciudad = ?, imagen = ? WHERE id = ?";
    db.query(sql, [modelo, anio, matricula, pais_cc, ciudad, imagen, id], (err, result) => {
        if (err) throw err;
        res.json({message: "Coche actualizado"});
    });
};

const deleteCar = (req, res) => {
    const {id} = req.params;
    const sql = "DELETE FROM coches WHERE id = ?";
    db.query(sql, [id], (err, result) => {
        if (err) throw err;
        res.json({message: "Coche eliminado"});
    });
};

module.exports = {
    getAllCars,
    getCarById,
    createCar,
    updateCar,
    deleteCar
}
