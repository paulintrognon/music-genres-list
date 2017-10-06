const genres = require('./index');

const completedGenres = genres.forEach(function (genre) {
  const newGenre = Object.assign({}, genre);
  if (genre.parents && genre.parents.length) {
    newGenre.parents = genre.parents.forEach(function (parentName) {
      require(`./genres/${parentName}`);
    });
  }
  if (genre.subgenres && genre.subgenres.length) {
    newGenre.subgenres = genre.subgenres.forEach(function (subgenreName) {
      require(`./genres/${subgenreName}`);
    });
  }
});
