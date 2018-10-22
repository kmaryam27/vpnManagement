const User = require('./user');
const Plan = require('./plan');
const Server = require('./server');

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */

// Plan.belongsToMany(User, { through: 'Plan' });
// User.belongsTo(Plan);
Plan.hasOne(User);

// const model = User;
// for (let assoc of Object.keys(model.associations)) {
//   for (let accessor of Object.keys(model.associations[assoc].accessors)) {
//     console.log(
//       model.name + '.' + model.associations[assoc].accessors[accessor] + '()'
//     );
//   }
// }

module.exports = {
  User,
  Plan,
  Server,
};
