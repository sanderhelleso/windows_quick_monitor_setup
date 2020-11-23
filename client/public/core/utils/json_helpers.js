const { readFile } = require('./_file');

const readJSON = async path => {
  try {
    const data = await readFile(path);
    return JSON.parse(data);
  } catch (error) {
    throw error;
  }
};

const escapeJSON = jsonStr => {
  return jsonStr.replace(/\\/g, "\\\\")
                .replace(/\$/g, "\\$")
                .replace(/'/g, "\\'")
                .replace(/"/g, "\\\"");
}

exports.readJSON = readJSON;
exports.escapeJSON = escapeJSON;