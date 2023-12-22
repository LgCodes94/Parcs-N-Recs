const router = require('express').Router();
const { npsUrl, apiKey } = require('../config/connection');
const { get_by_StateCode } = require('../utils/helpers');

router.get('/:string', async (req, res) => {
    try {
        const data = await get_by_StateCode(req.params.string);
        res.render('search', {
            data,
            logged_in: req.session.logged_in});
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;