using System;
using System.Diagnostics;
using System.Runtime.InteropServices;
using System.Threading;

namespace wintools
{
    public class ScreenPositioner
    {
        public void MoveAppPositionByProcess(Process process)
        {
            IntPtr id = process.MainWindowHandle;
            ScreenPositioner.MoveWindow(process.MainWindowHandle, 0, 0, 750, 750, true);
        }

        private void GetScreenCoords()
        {

        }

        [DllImport("user32.dll", SetLastError = true)]
        internal static extern bool MoveWindow(IntPtr hWnd, int X, int Y, int nWidth, int nHeight, bool bRepaint);
    }


}