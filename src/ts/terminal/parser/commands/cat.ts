import { PageIndices, isFolder } from "../../directories";
import { Terminal } from "../../terminal";
import { Command } from "../commandTypes";
import { parseFile } from "../parseInputs";

export const CAT = {
  command: "cat",
  description: "cat - output the contents of a file input",
  usage: `Outputs the contents of a provided file.
cat <file>

<file>
    Specifies the file you choose to view the contents of.
`,
  callback: (terminal: Terminal, ...args: string[]) => {
    if (args.length > 1 || args.length == 0) {
      return "Invalid number of arguments. Usage: cat <file>\n";
    }

    const path = args[0];

    const [{ absolutePath, fileName }, success] = parseFile(
      path,
      terminal.currentDirectory
    );
    if (!success) {
      return `Invalid path to file ${path}\n`;
    }

    const res = terminal.getDirectory(absolutePath.split("/"));
    if (!res) {
      return `Could not find directory ${absolutePath}\n`;
    }

    if (res.children.has(fileName)) {
      if (isFolder(res.children.get(fileName))) {
        return `Cannot open folder ${fileName} as a file\n`;
      }

      // open file
      terminal.currentPage = PageIndices[fileName];
      return `Opening ${fileName}\n`;
    }

    return `Could not find file named ${fileName}\n`;
  },
} as Command;
