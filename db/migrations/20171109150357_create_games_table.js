//id, title, image, description, designers, year, rating
exports.up = function(knex, Promise) {
  return knex.schema.createTable('games', table => {
    table.increments()
    table.text('title').notNullable().defaultTo('')
    table.text('image').notNullable().defaultTo('')
    table.text('description').defaultTo('')
    table.text('designers').notNullable().defaultTo('')
    table.text('year').notNullable().defaultTo('')
    table.text('rating').notNullable().defaultTo('')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('games')
};
