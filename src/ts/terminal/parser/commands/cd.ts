import { Terminal } from "../../terminal";
import { Command } from "../commandTypes";
import { parseDirectory } from "../parseInputs";

export const CD = {
  command: "cd",
  description: "cd - change the working directory",
  usage: `Changes the working directory to a relative or absolute path. 
Absolute paths start with a single slash to indicate the root directory.
Relative paths start with either a "." or a "..", and subsequent directories are relative to the current working directory.
cd [directory]

[directory]
    Specifies the directory you want to change to. If none is provided, nothing changes.
`,
  callback: (terminal: Terminal, ...args: string[]) => {
    if (args.length > 1) {
      return "Invalid number of arguments. Usage: cd [directory]\n";
    }

    if (args.length == 0) {
      return terminal.currentDirectory + "\n";
    }

    const path = args[0];

    const [{ absolutePath }, success] = parseDirectory(
      path,
      terminal.currentDirectory
    );
    if (!success) {
      return `Invalid directory ${path}\n`;
    }

    const res = terminal.setDirectory(absolutePath);
    if (res) {
      return absolutePath + "\n";
    }
    return `Could not find directory ${absolutePath}\n`;
  },
} as Command;
