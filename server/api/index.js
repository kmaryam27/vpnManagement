const router = require('express').Router();
module.exports = router;

router.use('', async (req, res, next) => {
  const vpnModule = await require('../cli/run');
  vpnModule();
  console.log('vpnModule', vpnModule);
  res.send('empty response');
});

router.use('/users', require('./users'));

router.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});
