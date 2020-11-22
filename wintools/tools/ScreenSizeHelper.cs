namespace wintools
{
    public static class ScreenSizeHelper
    {
        private static int height;
        private static int width;


        public static void setSize(ScreenSize screenSize)
        {
            height = screenSize.height;
            width = screenSize.width;
        }

        public static int getHeight()
        {
            return height;
        }

        public static int getWidth()
        {
            return width;
        }
    }
}