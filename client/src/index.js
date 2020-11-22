import loadPresets from './presets/load_presets';
import { getScreenRes } from './monitor/read_monitor';
import { runCommand } from './utils/_file';

(async () => {
  const presets = await loadPresets();
  console.log(presets);
  const screenRes = getScreenRes();
  console.log(screenRes);

  const wintoolsPath = 'C:/Users/Sander/workspace/windows_quick_monitor_setup_app/wintools/'; 
  const appToOpen = 'C:/Users/Sander/Pictures/baby.jpg'
  runCommand('dotnet run --project', wintoolsPath + ` ${appToOpen} notepad 321`);
})();
