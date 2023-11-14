/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del();

  await knex('users').insert([
    {
      id: 1,
      username: 'user1',
      email: 'user1@example.com',
      phone: '123456789',
      password: 'hashed_password1',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 2,
      username: 'user2',
      email: 'user2@example.com',
      phone: '987654321',
      password: 'hashed_password2',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 3,
      username: 'user3',
      email: 'user3@example.com',
      phone: '555555555',
      password: 'hashed_password3',
      created_at: new Date(),
      updated_at: new Date(),
    },
  ]);
};
