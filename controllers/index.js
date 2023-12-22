const router = require('express').Router();

const homeRoutes = require('./homeRoutes');
const searchRoutes = require('./searchRoutes');
const apiRoutes = require('./api');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/search', searchRoutes);

module.exports = router;
