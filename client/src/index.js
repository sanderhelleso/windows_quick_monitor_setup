import loadPresets from './presets/load_presets';
import { getScreenSize } from './monitor/read_monitor';
import { runCommand } from './utils/_file';
import { escapeJSON } from './utils/json_helpers';

(async () => {
  const presets = await loadPresets();
  console.log(presets);
  const screenRes = getScreenSize();
  console.log(screenRes);

  const wintoolsPath = 'C:/Users/Sander/workspace/windows_quick_monitor_setup_app/wintools/'; 
  const appToOpen = 'C:/Users/Sander/Pictures/baby.jpg'

  const json = JSON.stringify({
    screen_size: screenRes,
    applications: [{
      "path": 'notepad',
      "layout_order": 1,
      "screen_width": 100,
      "screen_height": 50,
      "using_pixel_sizing": false,
      "using_exact_coords": false,
      "exact_coords": null
    }/*,
    {
      "path": appToOpen,
      "layout_order": 1,
      "screen_width": 100,
      "screen_height": 100,
      "using_pixel_sizing": false,
      "using_exact_coords": false,
      "exact_coords": null
    }*/]
  });

  const escaped = escapeJSON(json);  
  runCommand('dotnet run --project', wintoolsPath + ` "${escaped}"`);
})();
