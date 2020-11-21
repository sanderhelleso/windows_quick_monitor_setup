using System;

namespace wintools
{
    class Program
    {
        static void Main(string[] args)
        {
            var pathToProgram = "notepad";
            var processesUtil = new ProcessesUtil();
            processesUtil.StartProgramAndMove(pathToProgram);

        }
    }
}
