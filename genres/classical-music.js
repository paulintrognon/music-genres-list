module.exports = {
  name: 'Classical Music',
  link: 'https://en.wikipedia.org/wiki/Classical_music',
  parents: [
    require('./ancient-music'),
  ],
  subgenres: [
    require('./medieval-music'),
    require('./renaissance-music'),
  ]
};
