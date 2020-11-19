import util from 'util';
import fs from 'fs';
import { sep } from 'path';

export const readFile = util.promisify(fs.readFile);
export const getFileStats = util.promisify(fs.stat);
export const writeFile = util.promisify(fs.writeFile);

/**
 * Builds a path with platform-specific separator
 *
 * @param {Array} paths
 */
export const buildPath = paths => {
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
