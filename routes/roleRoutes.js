const express = require('express');
const { getAllRoles, createRole, updateRole, deleteRole } = require('../controllers/roleController');

const router = express.Router();

router.get('/', getAllRoles);
router.post('/', createRole);
router.put('/:id', updateRole);
router.delete('/:id', deleteRole);

module.exports = router;
