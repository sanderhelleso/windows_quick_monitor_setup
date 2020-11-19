import readConfig from '../utils/read_config';
import createPreset from './create_presets';
import { ROOT_PATH } from '../utils/root';
import { getFileStats, buildPath } from '../utils/_file';

const loadPresets = async () => {
  const config = await readConfig();
  const { presets_location, presets_name } = config;
  const presetsPath = `${ROOT_PATH}${buildPath([
    presets_location,
    presets_name
  ])}`;

  const exists = await presetsExist(presetsPath);
  if (exists) {
    console.log('PRESET EXISTS');
  } else {
    console.log('PRESET dont EXISTS');
    await createPreset(presetsPath);
  }
};

const presetsExist = async presetsPath => {
  try {
    await getFileStats(presetsPath);
  } catch (error) {
    console.log(error);
    return false;
  }

  return true;
};

export default loadPresets;
