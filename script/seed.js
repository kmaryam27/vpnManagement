'use strict';

const db = require('../server/db');
const { User, Plan, Server } = require('../server/db/models');

async function seed() {
  await db.sync({ force: true });
  console.log('db synced!');

  const users = await Promise.all([
    Plan.create({
      name: 'weekly',
      length: 7,
      price: 1.0,
    }),
    Plan.create({
      name: 'monthly',
      length: '30',
      price: 1.99,
    }),
    Plan.create({
      name: 'yearly',
      length: 365,
      price: 19.99,
    }),
    User.create({
      email: 'cody@email.com',
      password: '123',
      firstName: 'Cody',
      lastName: 'Ryan',
      isAdmin: false,
      planId: 2,
      planEnd: '2018-10-31',
      paymentDate: ['2018-10-01'],
      paymentAddress: 'cody+bitcoin@gmail.com',
      autoRenew: true,
      vpnId: '1',
    }),
    User.create({
      email: 'murphy@email.com',
      password: '123',
      firstName: 'Murphy',
      lastName: 'Jones',
      isAdmin: false,
      planId: 1,
      planEnd: '2018-11-12',
      paymentDate: ['2018-10-12'],
      paymentAddress: 'murphy+paypal@gmail.com',
      autoRenew: false,
      vpnId: '2',
    }),
    User.create({
      email: 'fdterr@gmail.com',
      password: '123456',
      firstName: 'Rick',
      lastName: 'Terry',
      isAdmin: true,
    }),
    Server.create({
      address: '111.111.111.111',
      port: 3128,
      country: 'United States',
    }),
    Server.create({
      address: '123.456.789.1',
      port: 5555,
      country: 'United Kingdom',
    }),
    Server.create({
      address: '666.666.666.666',
      port: 666,
      country: 'Hell',
    }),
  ]);

  console.log(`seeded ${users.length} users`);
  console.log(`seeded successfully`);
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...');
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log('closing db connection');
    await db.close();
    console.log('db connection closed');
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
