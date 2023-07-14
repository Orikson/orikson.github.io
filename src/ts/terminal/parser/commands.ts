import { Command } from "./commandTypes";
import { LS } from "./commands/ls";

export const Commands = new Map<string, Command>([["ls", LS]]);
