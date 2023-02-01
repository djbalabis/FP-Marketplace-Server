const router = require('express').Router();
const {
  getInventory,
  createInventory,

} = require('../../controllers/inventoryController');

router.route('/').get(getInventory).post(createInventory);

module.exports = router;