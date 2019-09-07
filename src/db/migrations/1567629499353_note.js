exports.up = (knex) => {
    return knex.schema.createTable('notes', (table) => {
        table.increments('id').primary();
        table.integer('user_id').unsigned().notNullable();
        table.text('content').notNullable();
        table.string('title');
        table.timestamps(true, true);
    });
};

exports.down = (knex) => {
    return knex.schema.dropTableIfExists('notes');
};
