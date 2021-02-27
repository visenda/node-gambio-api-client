module.exports = (gulp, callback) => {
  const sequence = require('run-sequence').use(gulp);

  return sequence('compile', callback);
};