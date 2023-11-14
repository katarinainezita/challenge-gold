/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('bookings', table => {
        table.increments('id').primary(); 
        table.integer('user_id').unsigned().references('id').inTable('users'); 
        table.integer('room_id').unsigned().references('id').inTable('rooms'); 
        table.date('check_in_date').notNullable(); 
        table.date('check_out_date').notNullable(); 
        table.integer('guests_count').notNullable(); 
        table.decimal('total_amount', 10, 2).notNullable(); 
        table.timestamp('created_at').notNullable();
        table.timestamp('updated_at').notNullable();
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('bookings');
};
