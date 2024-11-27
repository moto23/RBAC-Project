const Role = require('../models/Role');

exports.getAllRoles = async (req, res) => {
  try {
    const roles = await Role.find();
    res.json(roles);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch roles' });
  }
};

exports.createRole = async (req, res) => {
  try {
    const { name, permissions } = req.body;
    const role = new Role({ name, permissions });
    await role.save();
    res.status(201).json(role);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create role' });
  }
};

exports.updateRole = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, permissions } = req.body;
    const updatedRole = await Role.findByIdAndUpdate(id, { name, permissions }, { new: true });
    res.json(updatedRole);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update role' });
  }
};

exports.deleteRole = async (req, res) => {
  try {
    const { id } = req.params;
    await Role.findByIdAndDelete(id);
    res.json({ message: 'Role deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete role' });
  }
};
