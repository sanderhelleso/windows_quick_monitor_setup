import loadPresets from './presets/load_presets';
import { getScreenRes } from './monitor/read_monitor';
import { runFile } from './utils/_file';

(async () => {
  const presets = await loadPresets();
  console.log(presets);
  const screenRes = getScreenRes();
  console.log(screenRes);
})();
