const {Model} = require('objection');

class Note extends Model{
    static get tableName(){
        return 'notes';
    }

    static get relationMappings(){
        const User = require('./user');

        return {
            user: {
                relation: Model.BelongsToOneRelation,
                modelClass: User,
                join: {
                    from: 'notes.user_id',
                    to: 'users.id'
                }
            }
        }
    }
}

module.exports = Note;
