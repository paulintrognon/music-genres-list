module.exports = {
  name: 'Medieval Music',
  link: 'https://en.wikipedia.org/wiki/Medieval_music',
  examples: [
    'https://www.youtube.com/watch?v=4qcO1RlGh-A',
    'https://www.youtube.com/watch?v=qKNG6EjiIsE',
  ],
  subgenres: [
    require('./ars-antiqua'),
    require('./ars-nova'),
    require('./ars-subtilior'),
    require('./gregorian-chant'),
    require('./organum'),
    require('./early-motet'),
    require('./ballata'),
  ],
};
