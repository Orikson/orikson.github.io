import { Command } from "./commandTypes";
import { HELP } from "./commands/help";
import { LS } from "./commands/ls";
import { PWD } from "./commands/pwd";

export const Commands = new Map<string, Command>([
  ["ls", LS],
  ["help", HELP],
  ["pwd", PWD],
]);
