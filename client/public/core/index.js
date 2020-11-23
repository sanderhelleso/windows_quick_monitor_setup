const loadPresets = require('./presets/load_presets');
const { runCommand } = require('./utils/_file');
const { escapeJSON } = require('./utils/json_helpers');
const { startApp } = require('./startup');;

(async () => {
  /*const presets = await loadPresets();

  const wintoolsPath = 'C:/Users/Sander/workspace/windows_quick_monitor_setup_app/wintools/'; 

  const json = JSON.stringify({
    screen_size: screenRes,
    applications: [{
      "path": 'notepad',
      "layout_order": 1,
      "screen_width": 25,
      "screen_height": 100,
      "using_pixel_sizing": false,
      "using_exact_coords": false,
      "exact_coords": null
    },
    {
      "path": 'C:/Users/Sander/AppData/Roaming/Spotify/Spotify.exe',
      "layout_order": 2,
      "screen_width": 50,
      "screen_height": 100,
      "using_pixel_sizing": false,
      "using_exact_coords": false,
      "exact_coords": null
    },
    {
      "path": 'notepad',
      "layout_order": 3,
      "screen_width": 25,
      "screen_height": 100,
      "using_pixel_sizing": false,
      "using_exact_coords": false,
      "exact_coords": null
    }]
  });

  const escaped = escapeJSON(json);  
  runCommand('dotnet run --project', wintoolsPath + ` "${escaped}"`);*/
  startApp();
})();
