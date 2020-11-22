using System;
using System.Diagnostics;
using System.Runtime.InteropServices;
using System.Threading;

namespace wintools
{
    public class ScreenPositioner
    {
        public void MoveAppPositionByProcess(Process process, Application app)
        {
            int screenWidth = ScreenSizeHelper.getWidth();
            int screenHeight = ScreenSizeHelper.getHeight();

            int width = calculateScreenUnit(screenWidth, app.screen_width);
            int height = calculateScreenUnit(screenHeight, app.screen_height); ;
            IntPtr id = process.MainWindowHandle;

            ScreenPositioner.MoveWindow(id, 0, 0, width, height, true);
        }

        private int calculateScreenUnit(int totalUnit, int percentOfUnit)
        {
            return totalUnit * percentOfUnit / 100;
        }

        [DllImport("user32.dll", SetLastError = true)]
        internal static extern bool MoveWindow(IntPtr hWnd, int X, int Y, int nWidth, int nHeight, bool bRepaint);
    }


}