module.exports = {
  name: 'Ancient Music',
  link: 'https://en.wikipedia.org/wiki/Ancient_music',
  examples: [
    'https://www.youtube.com/watch?v=elERNFoEf3Y',
    'https://www.youtube.com/watch?v=X83IYWmcEFg',
  ],
  subgenres: [
   require('./music-of-ancient-greece'),
   require('./music-of-ancient-rome'),
   require('./music-of-mesopotamia'),
   require('./music-of-ancient-egypt'),
 ],
};
