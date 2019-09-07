const Note = require('../../models/note');

const noteFactory = (factory) => {
    factory.define('note', Note, {
        content: factory.chance('paragraph'),
        title: factory.chance('sentence')
    });
}

module.exports = noteFactory;
