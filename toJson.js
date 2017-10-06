const genres = require('./index');

const completedGenres = genres.map(function (genre) {
  const newGenre = Object.assign({}, genre);
  if (genre.parents && genre.parents.length) {
    newGenre.parents = genre.parents.map(function (parentName) {
      const parent = require(`./genres/${parentName}`);
      delete parent.parents;
      delete parent.subgenres;
      return parent;
    });
  }
  if (genre.subgenres && genre.subgenres.length) {
    newGenre.subgenres = genre.subgenres.map(function (subgenreName) {
      const parent = require(`./genres/${subgenreName}`);
      delete parent.parents;
      delete parent.subgenres;
      return parent;
    });
  }
  return newGenre;
});

console.log(JSON.stringify(completedGenres));
