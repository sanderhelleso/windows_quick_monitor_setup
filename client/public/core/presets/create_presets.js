const { writeFile } = require('../utils/_file');

const createPresets = async presetsPath => {
  const defaultData = JSON.stringify({}, null, 2);

  try {
    await writeFile(presetsPath, defaultData);
  } catch (error) {
    throw new Error(`Unable to create defaut presets template`);
  }
};

exports.createPresets = createPresets;
