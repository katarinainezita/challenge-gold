/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('rooms').del();
  await knex('rooms').insert([
    {
      id: 1,
      hotel_id: 1, // You should replace this with a valid hotel_id from your hotels table
      room_number: '101',
      room_type: 'Standard',
      price: 100.00,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id: 2,
      hotel_id: 2, // You should replace this with a valid hotel_id from your hotels table
      room_number: '201',
      room_type: 'Suite',
      price: 200.00,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id: 3,
      hotel_id: 1, // You should replace this with a valid hotel_id from your hotels table
      room_number: '102',
      room_type: 'Standard',
      price: 120.00,
      created_at: new Date(),
      updated_at: new Date()
    }
    // Add more entries as needed
  ]);
};
