
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('daBears').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('daBears').insert([
        { name: ' Mike Ditka' },
        { name: 'Jim McMahon' },
        { name: 'William The Refrigerator Perry' },
        { name: 'Mike Singletary' },
        { name: 'Richard Dent' },
        { name: 'Otis Wilson' },
        { name: 'Wilber Marshall' },
        { name: 'Leslie Frazier' },
      ]);
    });
};
