const router = require('express').Router();
const {
  getInventory,
  createInventory,
  deleteInventory,

} = require('../../controllers/inventoryController');

router.route('/').get(getInventory).post(createInventory);

router.route('/:inventoryId').delete(deleteInventory);

module.exports = router;