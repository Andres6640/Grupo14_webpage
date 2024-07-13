/* carController.js */

const pool = require("../db/db");

const getAllCars = async (req, res) => {
    try {
        const [results] = await pool.query('SELECT * FROM coches');
        res.json(results);
    } catch (err) {
        res.status(500).json({ error: error.message });
    }
};

const getCarById = async (req, res) => {
    const id = req.params.id;
    try {
        const [results] = await pool.query('SELECT * FROM coches WHERE id = ?', [id]);
        if (results.length === 0) {
            return res.status(404).json({ message: 'Car not found' });
        }
        res.json(results[0]);
    } catch (err) {
        res.status(500).json({ error: error.message });
    }
};

const getCarByUserId = async (req, res) => {
    const id = req.params.id;
    try {
        const [results] = await pool.query('SELECT * FROM coches WHERE usuario_id = ?', [id]);
        if (results.length === 0) {
            return res.status(404).json({ message: 'Car not found' });
        }
        res.json(results[0]);
    } catch (err) {
        res.status(500).json({ error: error.message });
    }
};

const createCar = async (req, res) => {
    const {modelo, anio, matricula, pais_cc, ciudad} = req.body;
    const sql = "INSERT INTO coches (modelo, anio, matricula, pais_cc, ciudad) VALUES (?, ?, ?, ?, ?)";
    const values = [modelo, anio, matricula, pais_cc, ciudad];

    try {
        const [result] = await pool.query(sql, values);
        res.json({
            message: 'Car created successfully',
            carId: result.insertId
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateCar = async (req, res) => {
    const id = req.params.id;
    const {modelo, anio, matricula, pais_cc, ciudad} = req.body;
    const sql = "UPDATE coches SET modelo = ?, anio = ?, matricula = ?, pais_cc = ?, ciudad = ? WHERE id = ?";
    const values = [modelo, anio, matricula, pais_cc, ciudad, id];

    try {
        const [result] = await pool.query(sql, values);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Car not found' });
        }
        res.json({ message: 'Car updated successfully' });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteCar = async (req, res) => {
    const id = req.params.id;

    try {
        const [result] = await pool.query('DELETE FROM coches WHERE id = ?', [id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Car not found' });
        }
        res.json({ message: 'Car deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    getAllCars,
    getCarById,
    getCarByUserId,
    createCar,
    updateCar,
    deleteCar
}
