const db = require('../config/db');
const bcrypt = require('bcryptjs');

const User = {
    create: async (name, email, password, role, callback) => {
        const hashedPassword = await bcrypt.hash(password, 10);
        db.query('INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)',
            [name, email, hashedPassword, role || 'user'], callback);
    },

    findByEmail: (email, callback) => {
        db.query('SELECT * FROM users WHERE email = ?', [email], callback);
    },

    findAll: (callback) => {
        db.query('SELECT id, name, email, role FROM users', callback);
    },

    update: (id, name, email, role, callback) => {
        db.query('UPDATE users SET name = ?, email = ?, role = ? WHERE id = ?',
            [name, email, role, id], callback);
    },

    delete: (id, callback) => {
        db.query('DELETE FROM users WHERE id = ?', [id], callback);
    }
};

module.exports = User;
