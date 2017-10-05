module.exports = {
  name: 'Classical Music',
  link: 'https://en.wikipedia.org/wiki/Classical_music',
  parents: [
    require('./ancient-music'),
    require('./medieval-music'),
  ],
  subgenres: [
    require('./renaissance-music'),
  ],
};
