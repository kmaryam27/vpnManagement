const router = require('express').Router();
const { User } = require('../db/models');
module.exports = router;

router.get('/adduser', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email'],
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});

router.get('/ip', async (req, res, next) => {
  try {
    let ip = req.connection.remoteAddress.split(':')[3];
    ip.split(':');
    console.log('request received', req.connection.remoteAddress.split(':'));
    res.send(ip);
  } catch (err) {
    next(err);
  }
});
