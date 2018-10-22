const router = require('express').Router();
const { Server } = require('../db/models');
module.exports = router;

router.get('/all', async (req, res, next) => {
  try {
    const servers = await Server.findAll();
    res.json(servers);
  } catch (err) {
    next(err);
  }
});
