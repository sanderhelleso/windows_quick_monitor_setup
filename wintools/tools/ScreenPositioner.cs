using System;
using System.Diagnostics;
using System.Runtime.InteropServices;
using System.Threading;

namespace wintools
{
    public class ScreenPositioner
    {
        private int screenWidth;
        private int screenHeight;

        public ScreenPositioner()
        {
            screenWidth = ScreenSizeHelper.getWidth();
            screenHeight = ScreenSizeHelper.getHeight();
        }

        public void MoveAppPositionByLayoutOrder(Application[] applications)
        {
            ProcessesUtil processesUtil = new ProcessesUtil();
            int offset = 0;

            foreach (Application app in applications)
            {
                Process process = processesUtil.StartProcess(app);
                MoveAppPosition(process, app, offset);
                offset = getOffsetPosition(app, offset);
            }
        }

        private void MoveAppPosition(Process process, Application app, int offset)
        {
            int width = calculateScreenUnit(screenWidth, app.screen_width);
            int height = calculateScreenUnit(screenHeight, app.screen_height);
            IntPtr id = process.MainWindowHandle;

            ScreenPositioner.MoveWindow(id, offset, 0, width, height, true);
        }

        private int getOffsetPosition(Application app, int currentOffset)
        {
            int offset = calculateScreenUnit(screenWidth, app.screen_width);
            offset = offset + currentOffset;
            return offset;
            //return offset > 0 ? offset - 15 : offset;
        }

        private int calculateScreenUnit(int totalUnit, int percentOfUnit)
        {
            return totalUnit * percentOfUnit / 100;
        }

        [DllImport("user32.dll", SetLastError = true)]
        internal static extern bool MoveWindow(IntPtr hWnd, int X, int Y, int nWidth, int nHeight, bool bRepaint);
    }


}