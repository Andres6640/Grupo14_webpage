/* userController.js */

const db = require("../db/db");

const getAllUsers = (req, res) => {
    const sql = "SELECT * FROM usuarios";
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
};

const getUserById = (req, res) => {
    const {id} = req.params;
    const sql = "SELECT * FROM usuarios WHERE id = ?";
    db.query(sql, [id], (err, result) => {
        if (err) throw err;
        res.json(result);
    });
};

const createUser = (req, res) => {
    const {nombre, email, direccion, ciudad, pais_cc, coche_id} = req.body;
    const sql = "INSERT INTO usuarios (nombre, email, direccion, ciudad, pais_cc, coche_id) VALUES (?, ?, ?, ?, ?, ?)";
    db.query(sql, [nombre, email, direccion, ciudad, pais_cc, coche_id], (err, result) => {
        if (err) throw err;
        res.json({message: "Usuario creado", userId: result.insertId});
    });
};

const updateUser = (req, res) => {
    const {id} = req.params;
    const {nombre, email, direccion, ciudad, pais_cc, coche_id} = req.body;
    const sql = "UPDATE usuarios SET nombre = ?, email = ?, direccion = ?, ciudad = ?, pais_cc = ?, coche_id = ? WHERE id = ?";
    db.query(sql, [nombre, email, direccion, ciudad, pais_cc, coche_id, id], (err, result) => {
        if (err) throw err;
        res.json({message: "Usuario actualizado"});
    });
};

const deleteUser = (req, res) => {
    const {id} = req.params;
    const sql = "DELETE FROM usuarios WHERE id = ?";
    db.query(sql, [id], (err, result) => {
        if (err) throw err;
        res.json({message: "Usuario eliminado"});
    });
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}
