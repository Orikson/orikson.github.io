import { Terminal } from "../../terminal";
import { Command } from "../commandTypes";

export const CAT = {
  command: "cat",
  description: "cat - output the contents of a file input",
  usage: `Outputs the contents of a provided file.
cat <file>

<file>
    Specifies the file you choose to view the contents of.
`,
  callback: (terminal: Terminal, ...args: string[]) => {
    if (args.length > 1) {
      return "Invalid number of arguments. Usage: cat <file>\n";
    }

    return "\n";
  },
} as Command;
