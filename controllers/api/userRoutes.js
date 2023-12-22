const router = require('express').Router();
const { User, Park, UserPark } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
  try {
    const users = await User.findAll({
      include: {model:Park}
    });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
})


router.delete('/parks/:string', withAuth, async (req, res) => {
  try {
    const park = await Park.findOne({
      where: { park_code: req.params.string }
    });
    if (!park) {
      res.status(400).json("Error deleting park from favorites");
      return;
    }
    const deleteUP = await UserPark.destroy({
      where: {
        user_id: req.session.user_id,
        park_id: park.id
      }
    })
    res.status(200).json("Park removed from favorites");
  } catch (error) {
    res.status(500).json("Server error");
  }

});

router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: `You are now logged in! ${req.session.user_id} and ${req.session.logged_id}` });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
