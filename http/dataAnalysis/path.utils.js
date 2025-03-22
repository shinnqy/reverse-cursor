// @ts-check

const path = require('path');

/**
 * @param {string} absolutePath
 */
function getFileName(absolutePath) {
  const tmp = path.basename(absolutePath).split('.');
  tmp.pop();
  const fileName = tmp.join('.');
  return fileName
}

module.exports = {
  getFileName,
}