const router = require('express').Router();
const AdminController = require('../controller/AdminController');
const authentication = require('../middleware/auth');

router.post('/login', AdminController.loginAdmin);
router.get('/:id', AdminController.findOne);
router.post('/create', AdminController.createAdmin);
router.use(authentication);
router.get('/', AdminController.findAll);
//MIDLERWARE
router.delete('/:id', AdminController.deleteAdmin);

module.exports = router;