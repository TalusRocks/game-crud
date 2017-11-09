
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('games').del()
    .then(function () {
      // Inserts seed entries
      return knex('games').insert([
        {id: 1, uuid: '123-abc', title: 'Clans of Caledonia', image: 'https://cf.geekdo-images.com/images/pic3742011_md.jpg', description: 'Produce, trade, buy, and sell goods in old Scotland. Whiskey and sheep!', designers: 'Juma Al-JouJou', year: 2017, rating: '10'},
        {id: 2, uuid: '456-abc', title: 'Caylus', image: 'https://cf.geekdo-images.com/images/pic876751_md.jpg', description: 'The title that popularized worker placement. Open information and the jerk Provost make this a tough and tight game, with fair interaction for Euro standards.', designers: 'William Attia', year: 2005, rating: '9'},
        {id: 3, uuid: '789-abc', title: 'Abalone', image: 'https://cf.geekdo-images.com/images/pic352397_md.jpg', description: 'An ever-shifting and abstract wrestling match; more about strong formations than sequential moves.', designers: 'Michel Lalet, Laurent Levi', year: 1987, rating: '10'}
      ])
    }).then(() => {
      return knex.raw(`SELECT setval('games_id_seq', (SELECT MAX(id) FROM games))`)
    })
}
