import readConfig from '../utils/read_config';
import { writeFile } from '../utils/_file';

const createPresets = async presetsPath => {
  const config = await readConfig();
  const { presets_template, application_path_template } = config;
  const { preset_1 } = presets_template;

  preset_1.application_paths.push(application_path_template);
  const defaultData = JSON.stringify({ preset_1 }, null, 2);

  try {
    await writeFile(presetsPath, defaultData);
  } catch (error) {
    throw new Error(`Unable to create defaut presets template`);
  }
};

export default createPresets;
