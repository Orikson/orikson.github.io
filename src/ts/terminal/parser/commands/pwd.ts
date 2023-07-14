import { Terminal } from "../../terminal";
import { Command } from "../commandTypes";

export const PWD = {
  command: "pwd",
  description: "pwd - print the name of the current directory",
  usage: `Print the full filename of the current working directory.
pwd
`,
  callback: (terminal: Terminal, ...args: string[]) => {
    if (args.length > 0) {
      return "Invalid number of arguments. Usage: pwd\n";
    }

    return terminal.currentDirectory + "\n";
  },
} as Command;
