using System;

namespace wintools
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine(string.Join('-', args));

            var pathFromClient = args[0];
            var otherPathFromClient = args[1];
            var processesUtil = new ProcessesUtil();
            processesUtil.StartProgramAndMove(pathFromClient);
            processesUtil.StartProgramAndMove(otherPathFromClient);

        }
    }
}
