/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('users', table => {
        table.increments('id').primary(); 
        table.string('username').notNullable(); 
        table.string('email').notNullable().unique();
        table.string('phone').notNullable(); 
        table.string('password').notNullable(); 
        table.timestamp('created_at').notNullable();
        table.timestamp('updated_at').notNullable();
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users');
};
