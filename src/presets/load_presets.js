import readConfig from '../utils/read_config';
import { ROOT_PATH } from '../utils/root';
import { getFileStats, buildPath } from '../utils/_file';

export const loadPresets = async () => {
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
