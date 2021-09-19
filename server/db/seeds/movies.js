
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('movies').del()
    .then(function () {
      // Inserts seed entries
      return knex('movies').insert([
        {id: 1, title: 'Hot Fuzz', year: 2007, image: 'https://imdb-api.com/images/original/MV5BMzg4MDJhMDMtYmJiMS00ZDZmLThmZWUtYTMwZDM1YTc5MWE2XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_Ratio0.6800_AL_.jpg', imdb_id: 'tt0425112', watched: 1, rating: 10},
        {id: 2, title: 'The Room', year: 2003, image: 'https://imdb-api.com/images/original/MV5BYjEzN2FlYmYtNDkwMC00NGFkLWE5ODctYmE5NmYxNzE2MmRiXkEyXkFqcGdeQXVyMjMwODc5Mw@@._V1_Ratio0.6762_AL_.jpg', imdb_id: 'tt0368226', watched: 0, rating: null},
      ]);
    });
};
