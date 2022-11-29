/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoose = require('mongoose');
const { NODE_ENV } = require('./fixtures/constants');

let mongo;
beforeAll(async () => {
  process.env.NODE_ENV = NODE_ENV;

  mongo = await MongoMemoryServer.create();
  const mongoUri = await mongo.getUri();

  await mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

beforeEach(async () => {
  const collections = await mongoose.connection.db.collections();

  for (const collection of collections) {
    await collection.deleteMany();
  }
});

afterAll(async () => {
  await mongoose.connection.close();
  await mongo.stop();
});
