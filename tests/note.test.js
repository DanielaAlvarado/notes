const request = require('supertest');
const app = require('../src/app');
const seeder = require('./seeder');
const Note = require('../src/models/note');

beforeAll(async () => {
    await seeder();
});

test('should pass test', async () => {

});
