import { Command } from "./commandTypes";
import { HELP } from "./commands/help";
import { LS } from "./commands/ls";

export const Commands = new Map<string, Command>([
  ["ls", LS],
  ["help", HELP],
]);
