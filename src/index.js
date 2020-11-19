import loadPresets from './presets/load_presets';

(async () => {
  const presets = await loadPresets();
  console.log(presets);
})();
