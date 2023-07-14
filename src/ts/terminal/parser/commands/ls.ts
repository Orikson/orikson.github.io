import { isFolder } from "../../directories";
import { Terminal } from "../../terminal";
import { Command } from "../commandTypes";
import { parseDirectory } from "../parseInputs";

export const LS = {
  command: "ls",
  description: "ls - list directory contents",
  usage: `Displays a list of files and subdirectories in a directory
ls [path]

[path]
    Specifies the directory to list. The current directory is used if none is specified.
`,
  callback: (terminal: Terminal, ...args: string[]) => {
    if (args.length > 1) {
      return "Invalid number of arguments. Usage: ls [path]\n";
    }

    let actualPath = terminal.currentDirectory;

    if (args.length == 1) {
      const path = args[0];

      const [{ absolutePath }, success] = parseDirectory(
        path,
        terminal.currentDirectory
      );
      if (!success) {
        return `Invalid directory ${path}\n`;
      }
      actualPath = absolutePath;
    }

    console.log(actualPath, actualPath.split("/"));

    const result = terminal.getDirectory(actualPath.split("/"));
    if (!result) {
      return `Could not find directory at ${actualPath}\n`;
    }

    if (result.children.size == 0) {
      return `This directory is empty\n`;
    }

    const folders = [];
    const files = [];
    for (const [name, child] of result.children) {
      const type = isFolder(child);
      if (type) {
        folders.push(`Folder - ${name}`);
      } else {
        files.push(`File - ${name}`);
      }
    }

    return folders.concat(files).join("\n") + "\n";
  },
} as Command;
