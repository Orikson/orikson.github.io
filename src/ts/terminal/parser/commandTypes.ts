import { Terminal } from "../terminal";

/**
 * Directory type for input parsing
 */
export interface DirectoryType {
  absolutePath: string;
}

/**
 * File type for input parsing
 */
export interface FileType {
  absolutePath: string;
  fileName: string;
}

export function isDirectory(obj: any): obj is DirectoryType {
  return "absolutePath" in obj && !isFile(obj);
}

export function isFile(obj: any): obj is FileType {
  return "fileName" in obj;
}

/**
 * @param command String that represents the name of the command
 * @param description A brief description of the command's functionality
 * @param usage A more complete description describing how exactly to use the command
 * @param reqargs The set of required in-order arguments
 * @param optargs The set of optional order-independent arguments
 * @param callback The function associated with the command, which returns its output
 */
export interface Command {
  command: string;
  description: string;
  usage: string;
  callback: (terminal: Terminal, ...args: string[]) => string;
}
