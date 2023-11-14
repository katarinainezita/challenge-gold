/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('hotels', table => {
        table.increments('id').primary(); 
        table.string('name').notNullable(); 
        table.string('address').notNullable(); 
        table.decimal('rating', 3, 2).defaultTo(0.0); 
        table.timestamp('created_at').notNullable();
        table.timestamp('updated_at').notNullable();
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('hotels');
};
