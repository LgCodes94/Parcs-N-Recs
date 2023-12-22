const router = require('express').Router();

const userRoutes = require('./userRoutes');
router.use('/users', userRoutes);

const parksRoutes = require('./parksRoutes');
router.use('/parks', parksRoutes);

const userparkRoutes = require('./userparkRoutes');
router.use('/userpark', userparkRoutes);

module.exports = router;