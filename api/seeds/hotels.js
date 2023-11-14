/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('hotels').del();
  await knex('hotels').insert([
    {
      id: 1, 
      name: 'Hotel A', 
      address: '123 Main St', 
      rating: 4.5, 
      created_at: new Date(), 
      updated_at: new Date()
    },
    {
      id: 2, 
      name: 'Hotel B', 
      address: '456 Oak St', 
      rating: 3.8, 
      created_at: new Date(), 
      updated_at: new Date()
    },
    {
      id: 3, 
      name: 'Hotel C', 
      address: '789 Pine St', 
      rating: 4.2, 
      created_at: new Date(), 
      updated_at: new Date()
    }
  ]);
};
