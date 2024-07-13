/* contactController.js */

const pool = require("../db/db");

const getAllContacts = async (req, res) => {
    try {
        const [results] = await pool.query('SELECT * FROM contacts');
        res.json(results);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getContactById = async (req, res) => {
    const id = req.params.id;
    try {
        const [results] = await pool.query('SELECT * FROM contacts WHERE id = ?', [id]);
        if (results.length === 0) {
            return res.status(404).json({ message: 'Contact not found' });
        }
        res.json(results[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const createContact = async (req, res) => {
    const { name, email, message } = req.body;

    try {
        const sql = 'INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)';
        const values = [name, email, message];
        const [result] = await pool.query(sql, values);

        res.json({
            message: 'Contact created successfully',
            id: result.insertId
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const updateContact = async (req, res) => {
    const id = req.params.id;
    const { name, email, message } = req.body;

    try {
        const sql = 'UPDATE contacts SET name = ?, email = ?, message = ? WHERE id = ?';
        const values = [name, email, message, id];
        const [result] = await pool.query(sql, values);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Contact not found' });
        }
        res.json({ message: 'Contact updated successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const deleteContact = async (req, res) => {
    const id = req.params.id;

    try {
        const [result] = await pool.query('DELETE FROM contacts WHERE id = ?', [id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Contact not found' });
        }
        res.json({ message: 'Contact deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    getAllContacts,
    getContactById,
    createContact,
    updateContact,
    deleteContact
}
