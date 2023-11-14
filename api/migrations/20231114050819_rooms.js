/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('rooms', table => {
        table.increments('id').primary(); 
        table.integer('hotel_id').unsigned().references('id').inTable('hotels'); 
        table.string('room_number').notNullable(); 
        table.string('room_type'); 
        table.decimal('price', 8, 2).notNullable(); 
        table.timestamp('created_at').notNullable();
        table.timestamp('updated_at').notNullable();
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('rooms');
};
