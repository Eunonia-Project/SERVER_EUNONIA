const router = require('express').Router();
const AdminController = require('../controllers/AdminController');

router.get('/', AdminController.findAll);
router.get('/:id', AdminController.findOne);
router.post('/', AdminController.createAdmin);
router.delete('/:id', AdminController.deleteAdmin);

module.exports = router;