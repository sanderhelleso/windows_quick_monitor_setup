
namespace wintools
{
    public class Application
    {
        public string path { get; set; }
        public int layout_order { get; set; }
        public int screen_width { get; set; }
        public int screen_height { get; set; }
        public bool using_pixel_sizing { get; set; }
        public bool using_exact_coords { get; set; }
        public ScreenSize exact_coords { get; set; }

    }
}