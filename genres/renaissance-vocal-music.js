module.exports = {
  name: 'Renaissance Vocal Music',
  parents: [
    require('./classical-music'),
    require('./renaissance-music'),
  ]
  subgenres: [
    require('./mass-renaissance'),
    require('./motet-renaissance'),
  ],
};
