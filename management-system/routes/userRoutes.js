const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const verifyToken = require('../middleware/auth');

router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/', verifyToken, userController.getAllUsers);
router.put('/:id', verifyToken, userController.updateUser);
router.delete('/:id', verifyToken, userController.deleteUser);

module.exports = router;
