/* countryController.js */

const express = require("express");
const pool = require("../db/db");

const getAllCountries = async (req, res) => {
    try {
        const [results] = await pool.query("SELECT * FROM paises");
        res.json(results);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    getAllCountries
}
