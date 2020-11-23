const util = require('util');
const fs = require('fs');
const { sep } = require('path');
const { asyncExec } = require('./asyncExec');

const readFile = util.promisify(fs.readFile);
const getFileStats = util.promisify(fs.stat);
const writeFile = util.promisify(fs.writeFile);
const runCommand = async (command, path) => {
  await asyncExec(`${command} ${path}`);
};

/**
 * Builds a path with platform-specific separator
 *
 * @param {Array} paths
 */
const buildPath = paths => {
  let buildtPath = '';
  paths.forEach((part, i) => {
    if (i !== paths.length - 1) {
      buildtPath += `${sep}${part}${sep}`;
    } else {
      buildtPath += part;
    }
  });

  return buildtPath;
};

exports.readFile = readFile;
exports.getFileStats = getFileStats;
exports.writeFile = writeFile;
exports.runCommand = runCommand;
