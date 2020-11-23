const readConfig = require('../utils/read_config');
const createPreset = require('./create_presets');
const { ROOT_PATH } = require('../utils/root');
const { getFileStats, buildPath } = require('../utils/_file');
const { readJSON } = require('../utils/json_helpers');

const loadPresets = async () => {
  const config = await readConfig();
  const { presets_location, presets_name } = config;
  const presetsPath = `${ROOT_PATH}${buildPath([
    presets_location,
    presets_name
  ])}`;

  if (!(await presetsExist(presetsPath))) {
    await createPreset(presetsPath);
  }

  return await readJSON(presetsPath);
};

const presetsExist = async presetsPath => {
  try {
    await getFileStats(presetsPath);
  } catch (error) {
    return false;
  }

  return true;
};

exports.loadPresets = loadPresets;
