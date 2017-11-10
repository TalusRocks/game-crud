
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('games').del()
    .then(function () {
      // Inserts seed entries
      return knex('games').insert([
        {id: 1, title: 'Clans of Caledonia', image: 'https://cf.geekdo-images.com/images/pic3511783_md.png', description: 'Clans of Caledonia is a mid-to-heavy economic game set in 19th-century Scotland.', designers: 'Juma Al-JouJou', year: '2017', rating: '10'},
        {id: 2, title: 'Terraforming Mars', image: 'https://cf.geekdo-images.com/images/pic2891964_md.jpg', description: 'The title that popularized worker placement. Open information and the jerk Provost make this a tough and tight game, with fair interaction for Euro standards.', designers: 'Isaac Fryxelius', year: '2016', rating: '9'},
        {id: 3, title: 'Scythe', image: 'https://cf.geekdo-images.com/images/pic2323719_md.jpg', description: 'Scythe is an engine-building game set in an alternate-history 1920s period. It is a time of farming and war, broken hearts and rusted gears, innovation and valor.', designers: 'Jamey Stegmaier', year: '2016', rating: '10'}
      ])
    }).then(() => {
      return knex.raw(`SELECT setval('games_id_seq', (SELECT MAX(id) FROM games));`)
    })
}
