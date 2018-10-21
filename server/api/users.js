const router = require('express').Router();
const { User, Plan } = require('../db/models');
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

router.get('/all', async (req, res, next) => {
  console.log('session is', req.session);
  try {
    const users = await User.findAll({
      where: {
        isAdmin: false,
      },
      attributes: [
        'id',
        'email',
        'firstName',
        'lastName',
        'planEnd',
        'autoRenew',
        'vpnId',
        'planId',
      ],
      // include: {
      //   model: Plan,
      // },
    });
    res.send(users);
  } catch (err) {
    next(err);
  }
});

router.post('/update', async (req, res, next) => {
  console.log('request received', req.body);
  try {
    const user = await User.findOne({ where: { email: req.body.email } });
    if (!user) {
      res.status(401).send('no user found');
    } else {
      console.log('user found', user);
      if (user.correctPassword(req.body.currentPassword)) {
        let body = req.body;
        await user.update(
          {
            ...user,
            password: body.newPassword,
            firstName: body.firstName || user.firstName,
            lastName: body.lastName || user.lastName,
            email: body.email || user.email,
          }
          // { where: { email: req.body.email } }
        );
        res.status(201).send('Update successful!');
      } else {
        res.status(401).send('Wrong password');
      }
    }
  } catch (err) {
    next(err);
  }
});

router.post('/signup', async (req, res, next) => {
  let users;
  try {
    users = await User.findOrCreate({
      where: {
        email: req.body.email,
      },
      defaults: {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password,
      },
    });
  } catch (err) {
    console.log(err);
  }
  if (users[1] === false) {
    res.status(406).send('email');
  } else {
    res.status(201).send(users[0]);
  }
});

router.get('/ip', async (req, res, next) => {
  try {
    let ip = req.connection.remoteAddress.split(':')[3] || '192.168.1.1';
    ip.split(':');
    console.log('request received', req.connection.remoteAddress.split(':'));
    res.send(ip);
  } catch (err) {
    next(err);
  }
});
