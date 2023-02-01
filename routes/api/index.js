const router = require('express').Router();
const userRoutes = require('./inventoryRoutes');

router.use('/inventory', userRoutes);

module.exports = router;