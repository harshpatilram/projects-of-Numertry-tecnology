const express = require('express');
const db = require('../db');
const router = express.Router();

// Get all blogs
router.get('/', (req, res) => {
    db.query('SELECT * FROM blogs ORDER BY created_at DESC', (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
});

// Get a single blog by ID
router.get('/:id', (req, res) => {
    db.query('SELECT * FROM blogs WHERE id = ?', [req.params.id], (err, results) => {
        if (err) return res.status(500).json(err);
        if (results.length === 0) return res.status(404).json({ message: 'Blog not found' });
        res.json(results[0]);
    });
});

// Create a new blog
router.post('/', (req, res) => {
    const { title, content, author } = req.body;
    db.query('INSERT INTO blogs (title, content, author) VALUES (?, ?, ?)', 
    [title, content, author], 
    (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ id: result.insertId, title, content, author });
    });
});

// Update a blog
router.put('/:id', (req, res) => {
    const { title, content, author } = req.body;
    db.query('UPDATE blogs SET title=?, content=?, author=? WHERE id=?', 
    [title, content, author, req.params.id], 
    (err, result) => {
        if (err) return res.status(500).json(err);
        if (result.affectedRows === 0) return res.status(404).json({ message: 'Blog not found' });
        res.json({ message: 'Blog updated successfully' });
    });
});

// Delete a blog
router.delete('/:id', (req, res) => {
    db.query('DELETE FROM blogs WHERE id=?', [req.params.id], (err, result) => {
        if (err) return res.status(500).json(err);
        if (result.affectedRows === 0) return res.status(404).json({ message: 'Blog not found' });
        res.json({ message: 'Blog deleted successfully' });
    });
});

module.exports = router;
