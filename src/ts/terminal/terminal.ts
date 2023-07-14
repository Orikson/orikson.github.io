import { Directories, Folder, Item, isFolder } from "./directories";
import { Commands } from "./parser/commands";

export class Terminal {
  user: string;

  private _currentDirectory: string;
  public get currentDirectory() {
    return this._currentDirectory;
  }
  public set currentDirectory(dir: string) {
    // reduce dir to absolute path
    this._currentDirectory = dir;
  }

  private directories = Directories;
  private _commands = Commands;
  public get commands() {
    return this._commands;
  }

  constructor(user: string) {
    this.user = user;
    this._currentDirectory = "/";
  }

  get header() {
    return `${this.user}:${this.currentDirectory}$ `;
  }

  // Processes the command given by text input, and returns the command's output
  private processCommand(line: string): string {
    const input = line.split(" ");

    if (input.length == 0) {
      return "";
    }

    const command = input[0];
    const exec = this.commands.get(command);
    if (!exec) {
      return `Unrecognized command ${command}. Run the help command to get information on available commands\n`;
    }

    return exec.callback(this, ...input.slice(1));
  }

  // Takes the input command as a string, parses it, processes it, and returns the output as a string
  processInput(input: string): string {
    if (input.length == 0) {
      return "";
    }

    return this.processCommand(input);
  }

  // `dir` must be an array where each string is the next directory (i.e. derived from an absolute path)
  getDirectory(dir: string[]): Folder | null {
    let curr: Item = this.directories;
    if (!isFolder(curr)) {
      return null;
    }

    for (const directory of dir) {
      if (directory == "") {
        continue;
      }

      if (!isFolder(curr)) {
        return null;
      }

      const child = curr.children.get(directory);
      if (child && isFolder(child)) {
        curr = child;
      } else {
        return null;
      }
    }

    return curr as Folder;
  }
}
