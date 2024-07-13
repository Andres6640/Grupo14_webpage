/* userController.js */

const pool = require("../db/db");
const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const path = require("path");

const getAllUsers = async (req, res) => {
    try {
        const [results] = await pool.query("SELECT * FROM usuarios");
        res.json(results);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getUserById = async (req, res) => {
    const id = req.params.id;
    try {
        const [result] = await pool.query("SELECT * FROM usuarios WHERE id = ?", [id]);
        if (result.length === 0) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json(result[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const [userRows] = await pool.query("SELECT * FROM usuarios WHERE email = ?", [email,
        ]);
        const user = userRows[0]; // Obtener el primer resultado del array
        if (!user) {
            return res.status(400).json({ error: "Invalid email or password" });
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(400).json({ error: "Invalid email or password" });
        }
        res.json({
            success: "Login successful",
            id: user.id,
            token: createToken(user),
        });
    } catch (err) {
        console.error("Error logging in:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

/*
        name: name,
        email: email,
        model: modelo,
        year: anio,
        plate: matricula,
        city: ciudad,
        password: password,
        pais_cc: pais,
        imagen: imagen
*/

const createUser = async (req, res) => {
    const { name, email, model, year, plate, city, pais_cc, password, imagen } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const sqlUser = "INSERT INTO usuarios (nombre, email, ciudad, pais_cc, password) VALUES (?, ?, ?, ?, ?)";
    const valuesUser = [name, email, city, pais_cc, hashedPassword];

    try {
        const [resUser] = await pool.query(sqlUser, valuesUser);
        res.json({
            message: "User created successfully",
            id: resUser.insertId
        });

        const file_imagen = path.win32.basename(imagen);

        const sqlCar = "INSERT INTO coches (modelo, anio, matricula, pais_cc, ciudad, imagen, usuario_id) VALUES (?, ?, ?, ?, ?, ?, ?)";
        const valuesCar = [model, year, plate, pais_cc, city, file_imagen, resUser.insertId];

        try {
            const [resCar] = await pool.query(sqlCar, valuesCar);
            res.json({
                message: "Car created successfully",
                id: resCar.insertId
            });
        } catch (error) {
            res.status(500).json({ error: err.message });
        }

    } catch (err) {
        if (err.code === "ER_DUP_ENTRY") {
            res.status(409).json({ error: "Duplicate entry for email" });
        } else {
            res.status(500).json({ error: err.message });
        }
    }
};

const updateUser = async (req, res) => {
    const id = req.params.id;
    const { nombre, email, ciudad, pais_cc } = req.body;
    let sql = "UPDATE usuarios SET nombre = ?, email = ?, ciudad = ?, pais_cc = ?";
    const values = [name, email, city, country];

    try {
        const [result] = await pool.query(sql, values);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json({ message: "User updated successfully" });

        /* Actualiza datos del coche */

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const deleteUser = async (req, res) => {
    const id = req.params.id;
    try {
    const [result] = await pool.query("DELETE FROM usuarios WHERE id = ?", [id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json({ message: "User deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const createToken = (user) => {
    const payload = {
        user_id: user.id,
    };
    return jwt.sign(payload, process.env.JWT_SECRET);
};

module.exports = {
    getAllUsers,
    getUserById,
    login,
    createUser,
    updateUser,
    deleteUser,
    createToken
}
