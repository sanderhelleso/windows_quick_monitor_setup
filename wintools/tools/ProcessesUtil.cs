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

        public void StartProgramAndMove(String pathToProgram)
        {
            Process process = StartProgramProcess(pathToProgram);
            ScreenPositioner screenPositioner = new ScreenPositioner();
            screenPositioner.MoveAppPositionByProcess(process);
        }

        private Process StartProgramProcess(String pathToProgram)
        {
            Process process = GetProcsessWithStartInfo(pathToProgram);
            process.Start();
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