// repository.js
const db = require('../config/db');

// Create a new licencing key entry
const createLicencingKey = async (project, licencing_key, duration) => {
    const query = 'INSERT INTO `licencing-key` (project, licencing_key, creation_date, duration) VALUES (?, ?, current_timestamp(), ?)';
    const [results] = await db.execute(query, [project, licencing_key, duration]);
    return results;
};

// Read all licencing key entries
const getLicencingKeys = async () => {
    const query = 'SELECT * FROM `licencing-key`';
    const [results] = await db.execute(query);
    return results;
};

// Read a single licencing key entry by ID
const getLicencingKeyById = async (id) => {
    const query = 'SELECT * FROM `licencing-key` WHERE id = ?';
    const [results] = await db.execute(query, [id]);
    return results[0];
};

// Update a licencing key entry
const updateLicencingKey = async (id, project, licencing_key, duration) => {
    const query = 'UPDATE `licencing-key` SET project = ?, licencing_key = ?, duration = ? WHERE id = ?';
    const [results] = await db.execute(query, [project, licencing_key, duration, id]);
    return results;
};

// Delete a licencing key entry
const deleteLicencingKey = async (id) => {
    const query = 'DELETE FROM `licencing-key` WHERE id = ?';
    const [results] = await db.execute(query, [id]);
    return results;
};

module.exports = {
    createLicencingKey,
    getLicencingKeys,
    getLicencingKeyById,
    updateLicencingKey,
    deleteLicencingKey
};