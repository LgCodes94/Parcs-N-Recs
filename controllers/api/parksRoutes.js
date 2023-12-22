const router = require('express').Router();
const { Park, UserPark, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    await Park.findOrCreate({
      where: { park_code: req.body.park_code },
      defaults: req.body
    });
    
    
    
    // .then(([res, created]) => {
    //   if (created) {
    //     return UserPark.create({
    //       user_id: req.session.user_id,
    //       park_id: res.id
    //     });
    //   }
    // });
    res.status(200).json("favorited");
  } catch (err) {
    res.status(400).json(err);
  }
});



router.get('/', async (req, res) => {
  try {
    const data = await Park.findAll({
      include: [{ model: User }]
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);

  }
})

module.exports = router;