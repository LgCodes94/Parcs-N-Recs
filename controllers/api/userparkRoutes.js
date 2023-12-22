const router = require('express').Router();
const { Park, UserPark, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
  try {
    const data = await UserPark.findAll();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);

  }
});

router.post('/', withAuth, async (req, res) => {
  try {
    const park = await Park.findOne({ 
      where: { park_code: req.body.park_code }
    });
    console.log(park);
    const userpark = await UserPark.create({
      user_id: req.session.user_id,
      park_id: park.id
    });

    res.status(200).json("User-Park relationship added");
  } catch (error) {
    res.status(500).json(error);    
  }
})

module.exports = router;