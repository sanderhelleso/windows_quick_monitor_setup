import { ROOT_PATH } from '../utils/root';
import { readJSON } from './json_helpers';

const configFile = 'config.json';
const configPath = `${ROOT_PATH}/${configFile}`;

const readConfig = async () => {
  try {
    const configData = await readJSON(configPath);
    return configData;
  } catch (error) {
    throw new Error(
      `Unable to load app config at path: ${configPath} \n - Trace: ${error}`
    );
  }
};

export default readConfig;
