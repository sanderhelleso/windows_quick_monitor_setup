import path from 'path';
import readConfig from '../utils/read_config';
import { ROOT_PATH } from '../utils/root';

export const loadPresets = async () => {
  const config = await readConfig();
  const { presets_name, presets_location } = config;
  console.log(presets_location);
};
