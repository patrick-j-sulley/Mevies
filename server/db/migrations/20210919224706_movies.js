
exports.up = (knex) => {
    return knex.schema.createTable('movies', t => {
        t.increments('id').primary()
        t.string('title')
        t.string('description')
        t.string('image')
        t.string('imdb_id')
        t.boolean('watched')
        t.integer('rating')
    })
  
};

exports.down = function(knex) {
  return knex.schema.dropTable('movies')
};
