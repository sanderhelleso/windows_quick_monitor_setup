using System;
using System.Runtime.InteropServices;
using System.Threading;

namespace wintools
{
    public class ScreenPositioner
    {
        public void MoveAppPositionByHandle(IntPtr mainWindowHandle)
        {
            Thread.Sleep(1000);
            ScreenPositioner.MoveWindow(mainWindowHandle, 0, 0, 750, 750, true);
        }

        private void GetScreenSize()
        {

        }

        [DllImport("user32.dll", SetLastError = true)]
        internal static extern bool MoveWindow(IntPtr hWnd, int X, int Y, int nWidth, int nHeight, bool bRepaint);
    }


}