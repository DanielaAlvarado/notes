const factory = require('../factories/factory');
const Note = require('../../models/note');
const User = require('../../models/user');

exports.seed = async (knex) => {
    Note.knex(knex);
    User.knex(knex);

    const users = await User.query();

    for(let i = 0; i < users.length; i++){
        const notes = Math.floor(Math.random() * 11);

        for(let j = 0; j < notes; j++){
            await users[i].$relatedQuery('notes').insert(await factory.build('note'));
        }
    }
};
