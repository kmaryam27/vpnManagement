const router = require('express').Router();
module.exports = router;

const { Plan } = require('../db/models');

router.get('/all', async (req, res, next) => {
  try {
    const plans = await Plan.findAll();
    res.json(plans);
  } catch (err) {
    next(err);
  }
});
