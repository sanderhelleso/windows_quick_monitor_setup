using System;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace wintools
{
    class Program
    {
        static void Main(string[] args)
        {
            Preset preset = JsonSerializer.Deserialize<Preset>(args[0]);
            ScreenSizeHelper.setSize(preset.screen_size);

            ScreenPositioner screenPositioner = new ScreenPositioner();
            screenPositioner.MoveAppPositionByLayoutOrder(preset.applications);
        }
    }
}
