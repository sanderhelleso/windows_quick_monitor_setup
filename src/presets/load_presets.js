import readConfig from '../utils/read_config';
import createPreset from './create_presets';
import { ROOT_PATH } from '../utils/root';
import { getFileStats, buildPath } from '../utils/_file';
import { readJSON } from '../utils/json_helpers';

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

export default loadPresets;
