const router = require('express').Router();
const AdminController = require('../controller/AdminController');
const authentication = require('../middleware/auth');
const authenticationAdministror = require('../middleware/authRoleAdm');

router.post('/login', AdminController.loginAdmin);

//MIDLERWARE REGULAR ADMIN
router.use(authentication);
router.get('/:id', AdminController.findOne);
router.get('/', AdminController.findAll);

//MIDLERWARE FOR ROLE ADMINISTRATOR
router.use(authenticationAdministror);
router.post('/create', AdminController.createAdmin);
router.delete('/:id', AdminController.deleteAdmin);

module.exports = router;