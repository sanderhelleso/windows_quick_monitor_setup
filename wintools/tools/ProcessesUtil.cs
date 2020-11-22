using System;
using System.Diagnostics;
using System.Runtime.InteropServices;
using System.Threading;

namespace wintools
{
    public class ProcessesUtil
    {

        public void ListProcesses()
        {
            Process[] processes = Process.GetProcesses();
            foreach (Process p in processes)
            {
                Console.WriteLine(p.ProcessName);
            }
        }

        public void StartProgramAndMove(Application app)
        {
            Process process = StartProgramProcess(app.path);
            ScreenPositioner screenPositioner = new ScreenPositioner();
            screenPositioner.MoveAppPositionByProcess(process, app);
        }

        private Process StartProgramProcess(String pathToProgram)
        {
            Process process = GetProcsessWithStartInfo(pathToProgram);
            process.Start();

            while (string.IsNullOrEmpty(process.MainWindowTitle))
            {
                System.Threading.Thread.Sleep(100);
                process.Refresh();
            }

            return process;
        }

        private Process GetProcsessWithStartInfo(String pathToProgram)
        {
            Process process = new Process();
            process.StartInfo = new ProcessStartInfo(pathToProgram)
            {
                UseShellExecute = true
            };

            return process;
        }
    }
}