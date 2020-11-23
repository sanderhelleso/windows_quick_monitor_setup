const { ROOT_PATH } = require('./root');
const { readJSON } = require('./json_helpers');

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

exports.readConfig = readConfig;