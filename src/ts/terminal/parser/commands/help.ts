import { Terminal } from "../../terminal";
import { Command } from "../commandTypes";

export const HELP = {
  command: "help",
  description: "help - display information about builtin commands",
  usage: `Displays information about builtin commands
help [command]

[command]
    Specifies the command you want help with. If none is provided, returns a list of available commands.
`,
  callback: (terminal: Terminal, ...args: string[]) => {
    if (args.length > 1) {
      return "Invalid number of arguments. Usage: help [command]\n";
    }

    if (args.length == 1) {
      const command = terminal.commands.get(args[0]);

      if (!command) {
        return `Unrecognized command ${args[0]}. Type help to get a list of available commands.\n`;
      }
      return command.usage + "\n";
    }

    let final = "";
    for (const [name, command] of terminal.commands) {
      final += command.description + "\n";
    }
    return final;
  },
} as Command;
