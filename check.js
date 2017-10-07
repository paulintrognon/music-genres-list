const genres = require('./index');

genres.forEach(function (genre) {
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

console.log(`${genres.length} genres listed.`)
