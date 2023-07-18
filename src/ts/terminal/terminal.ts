import { Directories, Folder, Item, isFolder } from "./directories";
import { Commands } from "./parser/commands";

export class Terminal {
  user: string;

  pageObservables: ((p: number) => void)[] = [];
  private _currentPage = 0;
  public get currentPage() {
    return this._currentPage;
  }
  public set currentPage(page: number) {
    for (const observable of this.pageObservables) {
      observable(page);
    }
    this._currentPage = page;
  }

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

  private commandHistory: string[] = [];
  public getCommandHistory(i: number) {
    if (i < 0) {
      if (i < -this.commandHistory.length) {
        return undefined;
      }
      return this.commandHistory[this.commandHistory.length + i - 1];
    }
    if (i >= this.commandHistory.length) {
      return undefined;
    }
    return this.commandHistory[i];
  }
  private historyIndex = 0;
  public incHistory() {
    if (this.historyIndex + 1 > this.commandHistory.length) {
      return undefined;
    }
    this.historyIndex += 1;
    return this.commandHistory[this.commandHistory.length - this.historyIndex];
  }
  public decHistory() {
    if (this.historyIndex - 1 <= 0) {
      return undefined;
    }
    this.historyIndex -= 1;
    return this.commandHistory[this.commandHistory.length - this.historyIndex];
  }
  public resetHistory() {
    this.historyIndex = 0;
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
    const input = line.trim().split(/\s+/);

    if (input.length == 0) {
      return "";
    }

    const command = input[0];
    this.commandHistory.push(line);

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

  // `dir` must be an absolute path
  setDirectory(path: string): boolean {
    const dir = path.split("/");

    let curr: Item = this.directories;
    if (!isFolder(curr)) {
      return false;
    }

    for (const directory of dir) {
      if (directory == "") {
        continue;
      }

      if (!isFolder(curr)) {
        return false;
      }

      const child = curr.children.get(directory);
      if (child && isFolder(child)) {
        curr = child;
      } else {
        return false;
      }
    }

    this.currentDirectory = path;
    return true;
  }
}
